const express = require("express");
const home = require("./home");
const user = require("./user");

const app = express();

app.use("/", home);
app.use("/user", user);

// configure the port that express is going to listen to
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});