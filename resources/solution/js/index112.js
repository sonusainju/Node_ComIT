function showNumbers(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    if (a === b) {
      console.log("Same numbers");
    } else if (a > b) {
      for (let i = a; i >= b; i--) {
        console.log(i);
      }
    } else {
      for (let i = a; i <= b; i++) {
        console.log(i);
      }
    }
  } else {
    console.log("NaN");
  }
  console.log('--------------')
}

showNumbers(5, 10);
showNumbers(15, 3);
showNumbers(2, 2);
showNumbers(2, "2");
