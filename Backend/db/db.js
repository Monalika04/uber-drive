const mongoose = require('mongoose');


function connectToDb() {
    mongoose.connect(process.env.MONGO_URI
    ).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err));
}


module.exports = connectToDb;

// This code connects to a MongoDB database using Mongoose.
// It exports a function `connectToDB` that establishes the connection using the URI stored in the environment variable `MONGODB_URI`.
// The connection options `useNewUrlParser` and `useUnifiedTopology` are used to avoid deprecation warnings.
// If the connection fails, it logs an error message to the console.
// This setup is essential for applications that require a database connection, allowing them to perform CRUD operations on MongoDB collections.
// The function can be called in the main application file (e.g., App.js or server.js) to initiate the database connection when the server starts.
// The connection can be further customized with additional options as needed by the application.