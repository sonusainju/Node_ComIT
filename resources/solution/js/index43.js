const text = "game of thrones";
let firstChar, secondChar, thirdChar;

firstChar = text.charAt(0);
secondChar = text.charAt(5);
thirdChar = text.charAt(8);

// let result = firstChar + secondChar + thirdChar
let result = firstChar.concat(secondChar, thirdChar);
result = result.toUpperCase();

console.log(`the final result is: ${result}`);