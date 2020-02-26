let number = 0;
let total = 0;

while (number <= 1000) {
  total = total + number;
  // or total += number;
  console.log(total);
  number ++;
}

console.log('Toal is ' + total);