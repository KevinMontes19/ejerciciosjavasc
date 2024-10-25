let a = parseInt(prompt("Numero 1:"))
let b = parseInt(prompt("Numero 2:"))
let c = parseInt(prompt("Numero 3:"))

if ((a > b && a < c) || (a < b && a > c)) {
  console.log("El número medio es: " + a)
} else if ((b > a && b < c) || (b < a && b > c)) {
  console.log("El número medio es: " + b)
} else {
  console.log("El número medio es: " + c)
}
