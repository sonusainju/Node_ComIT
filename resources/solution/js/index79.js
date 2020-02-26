let number = 0;
let total = 0;

do {
  total = total + number;
  // or total += number;
  console.log(total);
  number ++;
} while (number <= 1000)

console.log('Toal is ' + total);