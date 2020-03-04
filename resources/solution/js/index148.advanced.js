let superhero = {
  name: 'Batman',
  secretName: 'Bruce',
  sidekick: ['Robin', 'Alfred', 'Gordon'],
  strength: 70
}

console.log('name ', superhero.name);
console.log('secretName ', superhero.secretName);
console.log('sidekick ', superhero.sidekick);
console.log('strength ', superhero.strength);
console.log('speed ', superhero.speed);

superhero.speed = 80

console.log('speed ', superhero.speed);


/* better way to print the proprieties values */
// on ES5
const properties = Object.keys(superhero); // return an array with all proprieties
const print = function(prop) {
  console.log(`${prop} is ${superhero[prop]}`);
}
properties.forEach(print)

// on ES6
properties.forEach(prop => console.log(`${prop} is ${superhero[prop]}`))
