"use strict";
let numeros = [0, 1];
for (let i = 2; i < 15; i++) {
    numeros[i] = numeros[i - 2] + numeros[i - 1];
}
console.log(numeros);
