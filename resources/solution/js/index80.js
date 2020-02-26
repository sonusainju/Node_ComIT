let number = 0;
let total = 0;

do {
  if (number % 2 !== 0) {
    total = total + number;
    console.log(total);
  }
  number ++;
} while (number <= 1000) 

console.log('Toal is ' + total);