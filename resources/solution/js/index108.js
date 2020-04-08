function sort_old(number1, number2, number3) {
  if (number1 <= number2 && number2 <= number3) {
    console.log("already in order");
  } else if (number1 < number2 && number1 < number3) {
    if (number2 < number3) {
      console.log(number1 + ", " + number2 + ", " + number3);
    } else {
      console.log(number1 + ", " + number3 + ", " + number2);
    }
  } else if (number2 < number1 && number2 < number3) {
    if (number1 < number3) {
      console.log(number2 + ", " + number1 + ", " + number3);
    } else {
      console.log(number2 + ", " + number3 + ", " + number1);
    }
  } else if (number3 < number1 && number3 < number2) {
    if (number1 < number2) {
      console.log(number3 + ", " + number1 + ", " + number2);
    } else {
      console.log(number3 + ", " + number2 + ", " + number1);
    }
  }
}

function sort(number1, number2, number3, highToLower) {
  if (highToLower) {
    if (number1 >= number2 && number2 >= number3) {
      console.log("already in order");
    } else if (number1 > number2 && number1 > number3) {
      if (number2 > number3) {
        console.log(number1 + ", " + number2 + ", " + number3);
      } else {
        console.log(number1 + ", " + number3 + ", " + number2);
      }
    } else if (number2 > number1 && number2 > number3) {
      if (number1 > number3) {
        console.log(number2 + ", " + number1 + ", " + number3);
      } else {
        console.log(number2 + ", " + number3 + ", " + number1);
      }
    } else if (number3 > number1 && number3 > number2) {
      if (number1 > number2) {
        console.log(number3 + ", " + number1 + ", " + number2);
      } else {
        console.log(number3 + ", " + number2 + ", " + number1);
      }
    }
  } else {
    sort_old(number1, number2, number3);
  }
}

sort(10, 8, 25);
sort(10, 8, 25, true);
sort(10, 25, 8);
sort(10, 25, 8, true);
