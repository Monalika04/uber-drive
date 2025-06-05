const http= require('http');
const app = require('./App');
const port = process.env.PORT || 3000;

const server = http.createServer(app);


server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// This file creates an HTTP server using the Express application defined in App.js.
// It listens on a specified port (default is 3000) and logs a message when the server is running.
// The server can be started by running this file, and it will handle incoming requests using the routes defined in App.js.
// The server can be extended with additional functionality, such as middleware or error handling, as needed by the application.

// | Benefit         | Explanation                                                         |
// | --------------- | ------------------------------------------------------------------- |
// | **Modularity**  | Easier to manage routes, middleware, configs separately.            |
// | **Testing**     | You can import `app.js` alone in tests without starting the server. |
// | **Readability** | Cleaner, organized code structure.                                  |
// | **Scalability** | Easier to extend and maintain as the project grows.                 |
