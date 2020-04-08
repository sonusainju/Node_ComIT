const http = require("http");
const port = 3001; // http-server package the default is 8080

// this is the callback for HTTP
const requestHandler = (request, response) => {
  response.end("Congrats you're using your first Node.js Web Server");
};

const server = http.createServer(requestHandler);
server.listen(port, error => {
  if (error) {
    return console.log(`Unable to start the server on port ${port}`, error);
  }
  console.log(`This HTTP server is running on port ${port}`);
});
