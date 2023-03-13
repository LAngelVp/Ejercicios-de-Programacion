"use strict";
let Factorial = function (parametro) {
    let numero = 1;
    for (let i = 1; i <= parametro; i++) {
        numero = numero * i;
        console.log(`Operador: [${numero}]-----Factor Multiplicador[${i}]`);
    }
};
console.log(Factorial(4));
