const express = require("express");
const path = require("path");

const app = express();

app.get("/", function(req, res) {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.all("/products", function(req, res) {
  res.status(500).send("Server error, please try it late");
});

app.use(function(req, res, next) {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

// configure the port that express is going to listen to
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
