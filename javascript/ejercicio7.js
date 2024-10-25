let valor = prompt("Ingresa un valor:")

if (parseInt(valor)) {
  let numero = parseInt(valor)
  console.log("Grados Kelvin: " + (numero + 273))
} else {
  console.log("Nombre del carácter: " + valor)
}
