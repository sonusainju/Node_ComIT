const express = require("express");
const path = require("path");

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/assets", express.static("public"));

app.use(function(req, res, next) {
  res.status(404).send("Not Found");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
