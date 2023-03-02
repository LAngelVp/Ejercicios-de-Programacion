"use strict";
function convertir(decimal) {
    let array = [];
    while (decimal !== 0) {
        let numero = decimal % 2;
        decimal = Math.floor(decimal / 2);
        array.push(numero);
    }
    array.reverse();
    console.log(array);
}
;
convertir(124);
