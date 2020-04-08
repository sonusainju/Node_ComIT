const express = require("express");
const router = express.Router();

router.get("/", function(request, response) {
  response.send("This is my Home page using Express Router");
});

module.exports = router;