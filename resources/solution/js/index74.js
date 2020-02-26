let stars = '*';
let quantity = 1;

while (quantity <= 20) {
  if (quantity % 2 == 0) {
    console.log(stars);
    stars += '**';
  }
  quantity++;
}

