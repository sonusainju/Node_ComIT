var log = ["["]

for (var i = 1; i<= 5; i++) {
  var j = i <10 ? '0'+i : i;
  log += `'exercises/debug/ex_${j}',`
}
console.log(log + "]")
