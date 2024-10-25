let sueldo = prompt("Ingresa el sueldo:")
sueldo = parseInt(sueldo)
if (sueldo < 300000) {
  sueldo = sueldo + (sueldo * 0.15)
}
console.log("Sueldo con aumento: " + sueldo)
