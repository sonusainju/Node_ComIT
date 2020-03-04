let mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];
let selected = ["Professor X", "Logan", "Phoenix", "Gambit"];

let newMutants = mutants.map(mutant => 
  selected.indexOf(mutant) > -1 
  ? `<3 ${mutant}` 
  : mutant
);

let newMutants2 = mutants.map(function(mutant) {
  if (selected.indexOf(mutant) > -1) {
    return `<3 ${mutant}`
  } else {
    return mutant
  }
})

console.log(newMutants)
console.log(newMutants2)