const add = function() {
  let total = 0;
  let length = arguments.length;
  for (let i = 0; i < length; i++) {
    if (typeof arguments[i] === "number") {
      total += arguments[i];
    }
  }

  return total;
};

console.log(add(2, 3, 9, 10));
console.log(add(5, 10, 20));
console.log(add(5, "paulo", 20));
