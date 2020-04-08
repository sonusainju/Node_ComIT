let stars = "*";

/* let quantity = 1;
do {
  if (quantity % 2 == 0) {
    console.log(stars);
    stars += '**';
  }
  quantity++;
} while (quantity <= 20) */

for (let n = 1; n <= 20; n++) {
  if (n % 2 == 0) {
    console.log(stars);
    stars += "**";
  }
}
