"use strict";
let Conjunto = function (array1, array2, bol) {
    let retorno_array = [];
    let retorno_array1 = [];
    if (bol == true) {
        for (let a = 0; a <= array1.length; a++) {
            for (let b = 0; b <= array2.length; b++) {
                if (array1[a] == array2[b]) {
                    retorno_array.push(array2[b]);
                    delete (array2[b]);
                }
            }
        }
    }
    if (bol == false) {
        for (let a = 0; a <= array1.length; a++) {
            for (let b = 0; b <= array2.length; b++) {
                if (array1[a] == array2[b]) {
                    retorno_array.push(array2[b]);
                    delete (array2[b]);
                    console.log(array2);
                }
                else {
                    retorno_array1.push(array1[a]);
                    delete (array1[a]);
                    console.log(retorno_array1);
                }
            }
        }
    }
};
let resultado = Conjunto(["L", "U", "I", "S", "A"], ["L", "U", "I", "S"], false);
