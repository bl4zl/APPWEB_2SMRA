const peso_kilogramos = parseFloat(prompt("introduce tu peso en kilogramos"));
const altura_metros = parseFloat(prompt("introduce tu altura en metros"));

const IMC = peso_kilogramos / altura_metros ** 2;

if (IMC < 18.5)
    alert("Tu IMC es de " + IMC.toFixed(2) + " Clasificacion: bajo peso")
if (IMC > 18.5 && IMC < 24.9)
    alert("Tu IMC es de " + IMC.toFixed(2)  + " Clasificacion: Peso normal")
if (IMC > 25 && IMC < 29.9)
    alert("Tu IMC es de " + IMC.toFixed(2)  + " Clasificacion: sobrepeso")
if (IMC > 30)
    alert("Tu IMC es de " + IMC.toFixed(2)  + " Clasificacion: obesidad")

