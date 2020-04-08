const Logger = require("logplease");
const logger = Logger.create("utils");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(request, response) {
  response.send("Congrats you're using your first Node.js and Express as Web Server");
});

app.listen(port, function(error) {
  if (error) {
    logger.error("Unable to start the server on port " + port, error);
  }
  logger.info("This HTTP server is running on port " + port);
});