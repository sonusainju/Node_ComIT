const arithmetic = {
  add: (a, b) =>
    typeof a !== "number" || typeof b !== "number"
      ? console.log("Not a Number")
      : console.log("add", a + b),
  subtract: (a, b) =>
    typeof a !== "number" || typeof b !== "number"
      ? console.log("Not a Number")
      : console.log("subtract", a - b),
  multiply: (a, b) =>
    typeof a !== "number" || typeof b !== "number"
      ? console.log("Not a Number")
      : console.log("multiply", a * b),
  divide: (a, b) =>
    typeof a !== "number" || typeof b !== "number"
      ? console.log("Not a Number")
      : console.log("divide", a / b),
  remainder: (a, b) =>
    typeof a !== "number" || typeof b !== "number"
      ? console.log("Not a Number")
      : console.log("remainder", a % b)
};

arithmetic.add(2, 10);
arithmetic.subtract(10, 5);
arithmetic.multiply(3, 100);
arithmetic.divide(40, 2);
arithmetic.remainder(20, 2);
