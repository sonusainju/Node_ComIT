const hour = 5;

if (hour >= 5 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else if ((hour >= 18 && hour <= 23) || (hour >= 0 && hour < 5)) {
  console.log("Good night");
} else {
  console.log("Not a valid hour");
}
