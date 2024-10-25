let a = parseInt(prompt("Coeficiente a:"))
let b = parseInt(prompt("Coeficiente b:"))
let c = parseInt(prompt("Coeficiente c:"))

let discriminante = b * b - 4 * a * c

if (discriminante >= 0) {
  let x1 = (-b + Math.sqrt(discriminante)) / (2 * a)
  let x2 = (-b - Math.sqrt(discriminante)) / (2 * a)
  console.log("x1: " + x1 + ", x2: " + x2)
} else {
  console.log("No tiene soluciones reales")
}

