let firstPerson = ['Dean', 'Whinchester', 'unkown', 42];
let secondPerson = ['Sam', 'Whinchester', 'New York', 37];

let first = firstPerson.reduce(
  function(previous, actual) {
    return previous + ', ' + actual
  }
)

let second = secondPerson.reduce(
  (a, b) => a + ', ' + b
)

console.log(first);
console.log(second);

if (first == second) {
  console.log('Same person');
}