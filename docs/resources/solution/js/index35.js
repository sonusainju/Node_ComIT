const clientId = 143245;
const inputClientId = "143245";

console.log(
  "The input client id is correct by value " + (clientId == inputClientId)
);

// console.log('The input client id is correct by value and type' + (clientId === inputClientId));
console.log("The input client id is correct by value and type");
if (clientId !== inputClientId) {
  console.log(false);
} else {
  console.log(true);
}
