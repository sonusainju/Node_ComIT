function getHexaColor(color) {
  switch (color) {
    case "white":
      console.log("#FFFFFF");
      break;
    case "black":
      console.log("#000000");
      break;
    case "blue":
      console.log("#0b24fb");
      break;
    case "green":
      console.log("#0e7e12");
      break;
    case "yellow":
      console.log("#fffd38");
      break;
    case "pink":
      console.log("#fec1cc");
      break;
  }
}

function toHexaColor(red, green, blue) {
  if (red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
    const r = parseInt(red, 16);
    const g = parseInt(green, 16);
    const b = parseInt(blue, 16);
    console.log(`#${r}${g}${b}`);
  } else {
    console.log("You don't have a valid color");
  }
}

getHexaColor("white");
getHexaColor("yellow");

toHexaColor(255, 0, 255);
toHexaColor(28, 200, 55);
