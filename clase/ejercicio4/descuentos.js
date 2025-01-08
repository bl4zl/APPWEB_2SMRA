const precio_original = parseFloat(prompt("introduce el precio original"))
const descuento = parseInt(prompt("introduce el porcentaje de descuento"))

const yipe = (precio_original % descuento)

alert("Tu  precio final es de " + yipe)