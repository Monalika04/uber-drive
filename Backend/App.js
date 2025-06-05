const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');

// Middleware that allows your API to be accessed from a different domain (used in frontend-backend setups).
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


module.exports = app;


// This is the main application file for the backend.// It sets up the Express application, configures CORS, and defines a simple route.
// The application can be extended with more routes and middleware as needed.
// The dotenv package is used to load environment variables from a .env file.
// The app can be imported in other files, such as server.js, to create an HTTP server.
// The app is configured to respond with "Hello World!" when the root URL is accessed.
// This file is essential for setting up the backend server and can be modified to include additional functionality as required by the application.
