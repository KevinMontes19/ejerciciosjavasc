let longitud = parseInt(prompt("Longitud:"))
let diametro = parseInt(prompt("Diámetro:"))
let masa = (diametro * longitud) / 3.5

if (longitud > 7.5 && longitud <= 9 && diametro >= 0.5 && diametro <= 1.3 && masa <= 5.8) {
  console.log("Varilla aceptada")
} else {
  console.log("Varilla rechazada")
}
