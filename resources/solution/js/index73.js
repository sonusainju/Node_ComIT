let stars = '**********';
let quantity = 10;

while (quantity > 0) {
  console.log(stars);
  stars = stars.substr(1);
  quantity--;
}