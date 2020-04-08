const express = require("express");
const router = express.Router();

router.get("/", function(request, response) {
  response.send("Please log to GET a user");
});

router.post("/", function(request, response) {
  response.send("Please log to CREATE a user");
});

router.put("/", function(request, response) {
  response.send("Please log to UPDATE a user");
});

router.delete("/", function(request, response) {
  response.send("Please log to DELETE a user");
});

module.exports = router;