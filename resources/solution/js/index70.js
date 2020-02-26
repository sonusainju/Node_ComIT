let number = 0;
let total = 0;

while (number <= 1000) {
  if (number % 2 !== 0) {
    total = total + number;
    console.log(total);
  }
  number ++;
}

console.log('Toal is ' + total);