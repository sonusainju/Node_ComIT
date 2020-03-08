const player = {
  name: null,
  energy: 100,
  lives: 3,
  loseEnergy: function(value) {
    this.energy -= value;
    if (this.energy <= 0) {
      this.energy = 0;
      this.loseLife(1);
    }
  },
  recoverEnergy: function(value) {
    this.energy += value;
    if (this.energy > 100) {
      this.energy = 100;
    }
  },
  loseLife: function(value) {
    this.lives -= value;
    if (this.lives <= 0) {
      console.log("you are dead");
    }
  },
  recoverLife: function(value) {
    this.lives += value;
    if (this.lives > 99) {
      this.energy = 99;
    }
  }
};

/* game */
player.name = "Paulo";
player.loseLife(1);
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoverEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.recoverLife(1);
player.loseLife(1);
player.recoverLife(1);

/* result */
console.log(
  `The ${player.name} has ${player.energy} energy and ${player.lives} lifes`
);

player.loseLife(1);
player.recoverEnergy(10);
player.loseEnergy(30);
