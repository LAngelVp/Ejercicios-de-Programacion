"use strict";
function eliminar(str1, str2) {
    let str1Minusculas = str1.toLowerCase();
    let str2Minusculas = str2.toLowerCase();
    let array1 = str1Minusculas.split('');
    let array2 = str2Minusculas.split('');
    let out1 = [];
    let out2 = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                out1.push(array2[j]);
                delete (array2[j]);
            }
        }
    }
    out2 = array2;
    console.log(out1);
    console.log(out2);
}
let ingresarDatos = eliminar('Luis', 'Manuel');
console.log(ingresarDatos);
