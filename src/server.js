const express = require('express');
const { MongoClient } = require('mongodb'); // Import the MongoClient from 'mongodb'

const app = express();
const port = process.env.PORT || 8080;

// Define the MongoDB connection URL and database name
const mongoURL = 'mongodb://localhost:27017'; // Change to your MongoDB server URL
const dbName = 'brottful';

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/api/data', (req, res) => {
  const collection = db.collection('feelings'); // Replace 'yourCollectionName' with your collection name

  collection.find({}).toArray((err, data) => {
    if (err) {
      console.error('Error retrieving data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(data);
    }
  });
});

// Connect to MongoDB
MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
  } else {
    const db = client.db(dbName);
    console.log('Connected to MongoDB');

    // Define your routes and other Express middleware here

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});