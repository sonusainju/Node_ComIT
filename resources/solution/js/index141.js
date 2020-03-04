let tripExpenses = [200, 500, 50]

let budget = tripExpenses.reduce(
  function(total, actual){
    return total + actual
  }
);

/* Similar as
let total = 0;
tripExpenses.forEach(function(expense){
  total = total + actual;
})
*/

console.log(budget);