function showGameDetails(object) {
  console.log("name: ", object.name);
  console.log("price: ", object.price);
  console.log("sold: ", object.sold);
  console.log("console: ", object.console);
  console.log("----------------------");
}

const games = [
  {
    name: "Crash Bandicoot N. Sane Trilogy",
    price: 1060,
    sold: 20,
    console: "PS4",
    showDetails: function() {
      showGameDetails(this);
    }
  },
  {
    name: "Lego Marvel Super Heroes",
    price: 700,
    sold: 25,
    console: "XBOX",
    showDetails: function() {
      showGameDetails(this);
    }
  },
  {
    name: "Gta V",
    price: 1449,
    sold: 30,
    console: "PS4",
    showDetails: function() {
      showGameDetails(this);
    }
  },
  {
    name: "Mortal Kombat Xl",
    price: 1190,
    sold: 34,
    console: "PS4",
    showDetails: function() {
      showGameDetails(this);
    }
  },
  {
    name: "Gta V",
    price: 1250,
    sold: 60,
    console: "XBOX",
    showDetails: function() {
      showGameDetails(this);
    }
  },
  {
    name: "Fifa 2017",
    price: 890,
    sold: 15,
    console: "PS4",
    showDetails: function() {
      showGameDetails(this);
    }
  },
  {
    name: "Uncharted 4",
    price: 950,
    sold: 30,
    console: "PS4",
    showDetails: function() {
      showGameDetails(this);
    }
  },
  {
    name: "Uncharted 4",
    price: 950,
    sold: 30,
    console: "PS4",
    showDetails: function() {
      showGameDetails(this);
    }
  },
  {
    name: "Need For Speed",
    price: 790,
    sold: 10,
    console: "PS4",
    showDetails: function() {
      showGameDetails(this);
    }
  },
  {
    name: "Lego Batman",
    price: 1000,
    sold: 18,
    console: "PS4",
    showDetails: function() {
      showGameDetails(this);
    }
  },
  {
    name: "Fifa 17",
    price: 1290,
    sold: 12,
    console: "PS4",
    showDetails: function() {
      showGameDetails(this);
    }
  },
  {
    name: "Resident Evil 7",
    price: 1390,
    sold: 10,
    console: "PS4",
    showDetails: function() {
      showGameDetails(this);
    }
  },
  {
    name: "Dragon Ball XX",
    price: 1390,
    sold: 25,
    console: "XBOX",
    showDetails: function() {
      showGameDetails(this);
    }
  }
];

games.forEach(game => game.showDetails());
