function biggerNumber(firstNumber, secondNumber) {
  /* One way to do validation
  if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber) ) {

  }
  */
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    console.log("You need to send 2 numbers");
  } else if (firstNumber > secondNumber) {
    console.log(`Number ${firstNumber} is bigger than ${secondNumber}`);
  } else if (firstNumber < secondNumber) {
    console.log(`Number ${secondNumber} is bigger than ${firstNumber}`);
  } else {
    console.log("Both numbers are " + firstNumber);
  }
}

biggerNumber(6, 3);
biggerNumber(2, 2);
biggerNumber(2);
