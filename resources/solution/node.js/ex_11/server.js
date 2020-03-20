// require the express module
const express = require("express");

// then create a express server
const app = express();

// Default library from Node.js that handle path and directory structure
const path = require("path");

// configure the default route and send a text as response
app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname, "index.html"));
});
app.get("/index.html", function(request, response) {
  response.sendFile(path.join(__dirname, "index.html"));
});
app.get("/products", function(request, response) {
  response.sendFile(path.join(__dirname, "products.html"));
});
app.get("/products.html", function(request, response) {
  response.sendFile(path.join(__dirname, "products.html"));
});

// configure the port that express is going to listen to
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});