"use strict";
const array = [];
let iteraciones = 0;
for (let i = 2; i <= 100; i++) {
    let nprimo = true;
    for (let elquedivide = 2; elquedivide < i; elquedivide++) {
        iteraciones++;
        if (i % elquedivide === 0) {
            nprimo = !nprimo;
            break;
        }
    }
    if (nprimo) {
        array.push(i);
    }
}
console.log(array);
