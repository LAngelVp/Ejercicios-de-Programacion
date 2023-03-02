"use strict";
function Palindromo(texto) {
    let nuevoTexto = '';
    let TextoGenerado = '';
    let textoOriginal = '';
    let minusculas = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (let i = minusculas.length - 1; i >= 0; i--) {
        nuevoTexto += minusculas[i];
    }
    TextoGenerado = nuevoTexto.split('').join('').replace(/\s+/g, '');
    textoOriginal = minusculas.replace(/\s+/g, '');
    if (TextoGenerado === textoOriginal) {
        console.log('ESTO ES UN PALINDROMO');
    }
    else {
        console.log('ESTO "NO ES UN PALINDROMO"');
    }
}
;
let nuevo = Palindromo('Ana lleva al oso la avellana');
console.log(nuevo);
