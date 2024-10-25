let nota1 = parseInt(prompt("Nota 1:"))
let nota2 = parseInt(prompt("Nota 2:"))
let nota3 = parseInt(prompt("Nota 3:"))

if (nota1 > nota2 && nota1 > nota3) {
  console.log("Promedio: " + ((nota1 + (nota2 > nota3 ? nota2 : nota3)) / 2))
} else if (nota2 > nota1 && nota2 > nota3) {
  console.log("Promedio: " + ((nota2 + (nota1 > nota3 ? nota1 : nota3)) / 2))
} else {
  console.log("Promedio: " + ((nota3 + (nota1 > nota2 ? nota1 : nota2)) / 2))
}
