let mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];
let selected = ["Magneto", "Iceman", "Gambit"];

let newMutants = mutants.filter(mutant => 
  selected.indexOf(mutant) === -1
);

let newMutants2 = mutants.filter(function(mutant) {
  if (selected.indexOf(mutant) > -1) {
    return false
  }
  return true
})

console.log(newMutants)
console.log(newMutants2)