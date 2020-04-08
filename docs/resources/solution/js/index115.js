function getLongerText(a, b) {
  if (a.length == b.length) {
    return "They have the same size";
  } else if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
}

getLongerText("comit", "iqmetrix");
getLongerText("Paulo", "Andrade");
getLongerText("Josh", "Mary");
