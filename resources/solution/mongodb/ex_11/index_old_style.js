const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const ObjectID = require("mongodb").ObjectID;

app.get("/", (req, res) => {
  res.send("API for SuperHeroes");
});

app.get("/superheroes", (req, res) => {
  MongoClient.connect(url, function(err, client) {
    if (err) {
      console.log("DB Error: " + err);
    }
    
    const db = client.db("comics");
    const collection = db.collection("superheroes");
    collection.find({}).toArray((error, documents) => {
      if (error) {
        console.log(error);
      }
      res.json(documents);
    });
    client.close();
  });
});

app.get("/superheroes/:id", (req, res) => {
  const selectedId = req.params.id;
  const filter = { _id: ObjectID(selectedId) };

  MongoClient.connect(url, function(err, client) {
    if (err) {
      console.log("DB Error: " + err);
    }

    const db = client.db("comics");
    const collection = db.collection("superheroes");
    collection.find(filter).toArray((error, documents) => {
      if (error) {
        console.log(error);
      }
      res.json(documents);
    });
    client.close();
  });
});

app.post("/superheroes/", urlencodedParser, (req, res) => {
  const data = req.body;

  MongoClient.connect(url, function(err, client) {
    if (err) {
      console.log("DB Error: " + err);
    }

    const db = client.db("comics");
    const collection = db.collection("superheroes");
    collection.insertOne(data, (error, result) => {
      if (error) {
        console.log(error);
      }
      res.status(204).json(result);
    });
    client.close();
  });
});

app.put("/superheroes/:id", urlencodedParser, (req, res) => {
  const data = req.body;
  const selectedId = req.params.id;
  const filter = { _id: ObjectID(selectedId) };
  const update = { $set: data };

  MongoClient.connect(url, function(err, client) {
    if (err) {
      console.log("DB Error: " + err);
    }

    const db = client.db("comics");
    const collection = db.collection("superheroes");
    collection.updateOne(filter, update, (error, result) => {
      if (error) {
        console.log(error);
      }
      res.status(204).json(result);
    });
    client.close();
  });
});

app.delete("/superheroes/:id", (req, res) => {
  const selectedId = req.params.id;
  const filter = { _id: ObjectID(selectedId) };

  MongoClient.connect(url, function(err, client) {
    if (err) {
      console.log("DB Error: " + err);
    }

    const db = client.db("comics");
    const collection = db.collection("superheroes");
    collection.deleteOne(filter, (error, result) => {
      if (error) {
        console.log(error);
      }
      res.status(203).json(result);
    });
    client.close();
  });
});

app.use(function(req, res, next) {
  res.status(404).render("404", { url: req.url });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
