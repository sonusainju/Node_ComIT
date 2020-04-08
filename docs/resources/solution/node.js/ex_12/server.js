const express = require("express");
const app = express();
const path = require("path");
const products = require("./api/products");

// configure the default route and send a text as response
app.get(["/", "/index.html"], function(request, response) {
  response.send('Welcome to my API')
});

app.get("/api/products", function(request, response) {
  response.json(products);
});

// configure the port that express is going to listen to
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});