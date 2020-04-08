const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const ObjectID = require("mongodb").ObjectID;

const executeDbCommand = (callback, res) => {
  MongoClient.connect(url, function(err, client) {
    if (err) {
      console.log("DB Error: " + err);
    }
    const db = client.db("comics");
    const collection = db.collection("superheroes");
    callback(collection, res);
    client.close();
  });
};

app.get("/", (req, res) => {
  res.send("API for SuperHeroes");
});

app.get("/superheroes", (req, res) => {
  executeDbCommand((collection, res) => {
    collection.find({}).toArray((err, documents) => {
      if (err) {
        console.log(err);
      }
      res.json(documents);
    });
  }, res);
});

app.get("/superheroes/:id", (req, res) => {
  const selectedId = req.params.id;
  const filter = { _id: ObjectID(selectedId) };

  executeDbCommand((collection, res) => {
    collection.find(filter).toArray((err, documents) => {
      if (err) {
        console.log(err);
      }
      res.json(documents);
    });
  }, res);
});

app.post("/superheroes", urlencodedParser, (req, res) => {
  const data = req.body;

  console.log(data);

  executeDbCommand((collection, res) => {
    collection.insertOne(data, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).json(result);
    });
  }, res);
});

app.put("/superheroes/:id", urlencodedParser, (req, res) => {
  const data = req.body;
  const selectedId = req.params.id;
  const filter = { _id: ObjectID(selectedId) };
  const update = { $set: data };

  executeDbCommand((collection, res) => {
    collection.updateOne(filter, update, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).json(result);
    });
  }, res);
});

app.delete(["/superheroes/:id", "/superheroes"], (req, res) => {
  const selectedId = req.params.id || req.query.id;
  const filter = { _id: ObjectID(selectedId) };

  executeDbCommand((collection, res) => {
    collection.deleteOne(filter, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    });
  }, res);
});

app.use(function(req, res, next) {
  res.status(404).render("404", { url: req.url });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
