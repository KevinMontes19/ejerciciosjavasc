let a = parseInt(prompt("Número 1:"))
let b = parseInt(prompt("Número 2:"))
let c = parseInt(prompt("Número 3:"))

if (a > b && a > c) {
  console.log(a + ", " + (b > c ? b + ", " + c : c + ", " + b))
} else if (b > a && b > c) {
  console.log(b + ", " + (a > c ? a + ", " + c : c + ", " + a))
} else {
  console.log(c + ", " + (a > b ? a + ", " + b : b + ", " + a))
}
