const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = 3000; // Or any other port you prefer

// // MongoDB configuration
// const mongoURL = 'mongodb://localhost:27017';
// const dbName = 'chat_app';

// MongoClient.connect(mongoURL, { useUnifiedTopology: true }, (err, client) => {
//   if (err) {
//     console.error('Error connecting to MongoDB:', err);
//     return;
//   }

//   console.log('Connected to MongoDB');

//   const db = client.db(dbName);

//   // Socket.io events
//   io.on('connection', (socket) => {
//     console.log('A user connected');

//     socket.on('chat message', (message) => {
//       saveMessageToDatabase(message); // Save the message to the database
//       io.emit('chat message', message); // Broadcast the message to all connected clients
//     });

//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
//   });

//   function saveMessageToDatabase(message) {
//     // Save the message to the "messages" collection in MongoDB
//     const collection = db.collection('messages');
//     collection.insertOne(message, (err) => {
//       if (err) {
//         console.error('Error saving message to MongoDB:', err);
//       }
//     });
//   }

//   // Start the server
//   server.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
//   });
// });

// // Express routes
// app.get('/messages', (req, res) => {
//   // Retrieve messages from the "messages" collection in MongoDB
//   const collection = db.collection('messages');
//   collection.find({}).toArray((err, messages) => {
//     if (err) {
//       console.error('Error retrieving messages from MongoDB:', err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }

//     res.json(messages);
//   });
// });
