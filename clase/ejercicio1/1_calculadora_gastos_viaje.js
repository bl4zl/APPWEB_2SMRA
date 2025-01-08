/*Objetivos: Crear una calculadora de gastos*/
/*Datos del usuario*/
const gastos_alojamiento = parseFloat(prompt("introduce los gastos de alomjamiento de tu viaje"));
const gastos_alimentacion = parseFloat(prompt("introduce los gastos de alimentacion de tu viaje"));
const gastos_entretenimiento = parseFloat(prompt("introduce los gastos de entretenimiento de tu viaje"));
/*Calcular el coste total de gastos*/
const suma = gastos_alimentacion + gastos_alojamiento + gastos_entretenimiento

/*Mostramos el resultado al usuario*/
alert("el costo total de viaje es " + suma);