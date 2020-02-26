let stars = '**********';
let quantity = 10;

do {
  console.log(stars);
  stars = stars.substr(1);
  quantity--;
} while (quantity > 0)