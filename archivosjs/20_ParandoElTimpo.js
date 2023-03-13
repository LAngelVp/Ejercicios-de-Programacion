"use strict";
const Tiempo = function (numero1, numero2, tiempo) {
    setTimeout(function () {
        let suma = numero1 + numero2;
        console.log(suma);
    }, tiempo);
};
let mostrar = Tiempo(1, 2, 500);
console.log(mostrar);
