let numbers = Array(1001).fill().map((_, index) => index);


let even = numbers.filter(function(n){
  if (n%2 === 0) {
    return true;
  }
  return false;
})

let odd = numbers.filter(n => n%2 === 1);

console.log('printing even numbers')
for (let i = odd.length-11 ; i < odd.length; i++) {
  console.log(odd[i]);
}

console.log('printing odd numbers')
for (let i = 0 ; i < 20; i++) {
  console.log(even[i]);
}

// with forEach
even.forEach((n, index) => {
  console.log(even[i]);
  if (index == 19) break;
})

// with filter
let first20 = even.filter((n, index) => index > 19);
console.log(first20);

