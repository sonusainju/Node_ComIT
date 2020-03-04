let numbers = [];

for (let i = 0; i<=1000; i++) {
  numbers.push(i);
}

// to print the 10 increment
// index: 1, original number: 1, incremented value: 11

let incremented = numbers.map(function(n, index) {
  return n + 10;
  //console.log(`index: ${index}, original number: ${n}, incremented value: ${n+10}`)
})

numbers.forEach(function(number, index) {
  console.log(`index: ${index}, original number: ${number}, incremented value: ${incremented[index]}`)
})