function getShapePerimiter(base, height) {
  let perimeter = 0;
  let shape = "square";
  if (base === height) {
    perimeter = base * 4;
  } else {
    perimeter = base * 2 + height * 2;
    shape = "rectangle";
  }

  console.log(`${perimiter} is the shape ${shape}`);
  if (perimeter > 100) {
    return "The perimiter is to big";
  } else {
    return `The perimiter is fine`;
  }
}

getShapePerimiter(4, 4);
getShapePerimiter(4, 8);
getShapePerimiter(50, 3);
