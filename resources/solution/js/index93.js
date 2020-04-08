let stars = "**********";

/*let quantity = 10;
do {
  console.log(stars);
  stars = stars.substr(1);
  quantity--;
} while (quantity > 0) */

for (let n = 10; n > 0; n--) {
  console.log(stars);
  stars = stars.substr(1);
}
