const express = require("express");
const app = express();
const port = 3000;
const superheroes = require("./superheroes");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { superheroes: superheroes });
});

app.get("/superheroes/:id", (req, res) => {
  const selectedId = req.params.id;
  let selectedSuperhero = superheroes.filter(s => s.id === +selectedId);
  selectedSuperhero = selectedSuperhero[0];

  if (!selectedSuperhero) { // if the id doesn't exist, throw a 404 error
    res.status(404).render("404", {url: req.url});
  } else {
    res.render("superhero", { superhero: selectedSuperhero });
  }
});

app.post("/superheroes/", urlencodedParser, (req, res) => {
  const newId = superheroes[superheroes.length - 1].id + 1;
  const newSuperHero = {
    id: newId,
    name: req.body.superhero.toUpperCase(),
    image: "lukecage.jpg"
  };
  superheroes.push(newSuperHero);

  res.redirect("/");
});

app.use(function(req, res, next) {
  res.status(404).render("404", {url: req.url});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
