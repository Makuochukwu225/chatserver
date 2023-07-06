const express = require("express");
const socket = require("socket.io");
const mongoose = require('mongoose');
// App setup
const PORT = process.env.PORT || 3000;
const app = express();

mongoose.createConnection(`mongodb+srv://officialrrye5:V8NjzE362JfWLNEB@chat.nm2pqa1.mongodb.net/chatdb`).on('open', () => {
  // Define the message schema
  const messageSchema = new mongoose.Schema({
    message: {
      type: String,
      required: true,
    },
  });

  // Create the Message model
  const Message = mongoose.model('Message', messageSchema);

  app.get('/', (req, res) => {
    res.send('Chat App Server');
  });
  const server = app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    console.log(`ws://localhost:${PORT}`);

    // Socket setup
    const io = socket(server);

    io.on("connection", function (socket) {
      console.log("Made socket connection");

      // Event when a new message is received
      socket.on('message', (message) => {
        // Save the message to MongoDB using Mongoose
        const newMessage = new Message({ message });
        newMessage.save();


        // Broadcast the message to all connected clients
        io.emit('message', newMessage);

      });
      socket.on('error', (error) => {
        console.error('Socket error:', error);
        io.emit('error', `${data}`);
        // Handle the error as desired
      });
      //Whenever someone disconnects this piece of code executed
      socket.on('disconnect', function () {
        console.log('A user disconnected');
      });
    });
  });
  console.log("MongoDB Connected");
}).on('error', () => {
  console.log("MongoDB Connection error");

});



