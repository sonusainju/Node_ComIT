let mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Magneto", "Beast", "Phoenix", "Logan", "Gambit"];

// different print functions and ways to write

// 1: as function
function print(p) { 
  console.log(p)
}
mutants.forEach(print);

// 2: as const or let
const print2 = function(p) { console.log(p)}
mutants.forEach(print2);

// 3: as ES6 (arrow function)
const print3 = p => console.log(p);
mutants.forEach(print3);

// 4: as inline function
mutants.forEach(function(mutant){
  console.log(mutant)
});

// 5: as inline ES6 function
mutants.forEach(mutant => console.log(mutant));

// 6: as inline ES6 function + index
mutants.forEach((mutant, index) => console.log(mutant));

// 7: as inline ES6 function + index (advanced)
mutants.forEach((mutant, index) => {
  console.log("at index " + index);
  console.log("the mutant is  " + mutant);
});
