let edad = parseInt(prompt("Edad:"))
let sexo = prompt("Sexo (M/F):")
let estadoCivil = prompt("Estado civil:")

if (sexo === "M" && edad > 40 && estadoCivil === "casado") {
  console.log("Nombre: " + nombre);
} else if (sexo === "F" && edad < 50 && estadoCivil === "soltera") {
  console.log("Nombre: " + nombre);
}
let nombre = prompt("Nombre:")

