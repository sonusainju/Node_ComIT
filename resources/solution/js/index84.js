let stars = '*';
let quantity = 1;

do {
  if (quantity % 2 == 0) {
    console.log(stars);
    stars += '**';
  }
  quantity++;
} while (quantity <= 20)

