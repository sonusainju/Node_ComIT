/* let number = 0;
let total = 0;
do {
  if (number % 2 !== 0) {
    total = total + number;
    console.log(total);
  }
  number ++;
} while (number <= 1000) 
*/

let total = 0;
for (let n = 0; n <= 1000; n++) {
  if (n % 2 !== 0) {
    total += n;
    console.log(total);
  }
}
console.log("Toal is " + total);
