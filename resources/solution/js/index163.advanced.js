const add = function() {
  let total = 0;
  let allArguments = [...arguments];
  allArguments.forEach(argument =>
    typeof argument === "number" ? (total += argument) : false
  );

  return total;
};

console.log(add(2, 3, 9, 10));
console.log(add(5, 10, 20));
console.log(add(5, "paulo", 20));
