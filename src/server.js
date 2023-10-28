const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});