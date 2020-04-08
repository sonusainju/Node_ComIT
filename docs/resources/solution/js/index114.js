function revert(word) {
  return word
    .split("")
    .reverse()
    .join("");
}

function revert2(word) {
  let newString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i]; // or newString = newString + str[i];
  }
  return newString;
}

revert("hello");
revert("comit");
