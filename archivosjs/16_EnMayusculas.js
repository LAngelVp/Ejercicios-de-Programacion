"use strict";
function EnMayusculas(texto) {
    let textoArray = texto.split(' ');
    let nueva_Oracion = '';
    for (let i = 0; i < textoArray.length; i++) {
        textoArray[i] = textoArray[i][0].toUpperCase() + textoArray[i].substr(1);
        ;
    }
    console.log(textoArray.join(' '));
}
let escrito = EnMayusculas('mi familia es exitosa');
console.log(escrito);
