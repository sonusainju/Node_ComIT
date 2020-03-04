let mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];
let selected = "";

mutants.forEach(function(mutant) {
  if (mutant === 'Iceman' || 
      mutant === 'Logan' ||
      mutant === 'Phoenix') {
        selected += mutant + ', '
      }
})

console.log(selected)

