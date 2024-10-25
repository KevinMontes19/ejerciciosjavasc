let comisionTotal = 0
let ventasMenores = 0
let ventasMayores = 0

for (let i = 1; i <= 5; i++) {
  let venta = parseInt(prompt("Precio de la venta " + i + ":"))
  if (venta < 2000) {
    comisionTotal += venta * 0.03
    ventasMenores++
  } else {
    comisionTotal += venta * 0.05
    ventasMayores++
  }
}

console.log("Comisión total: " + comisionTotal)
console.log("Ventas menores de 2000: " + ventasMenores)
console.log("Ventas mayores o iguales a 2000: " + ventasMayores)

