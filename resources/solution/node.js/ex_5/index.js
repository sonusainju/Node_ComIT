const Logger = require("logplease");
const c = Logger.create("utils");

const isEven = require("./numbers");

[2, 3, 101, 201, 202, 100].forEach(n => {
  if (isEven(n)) {
    c.info(n + " is even");
  } else {
    c.error(n + " is odd");
  }
});
