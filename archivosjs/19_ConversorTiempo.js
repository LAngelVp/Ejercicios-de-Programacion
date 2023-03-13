"use strict";
let Conversor = function (dias, horas, minutos, segundos) {
    let dias_milisegundos = dias * 24 * 60 * 60 * 1000;
    let horas_milisegundos = horas * 60 * 60 * 1000;
    let minutos_milisegundos = minutos * 60 * 1000;
    let segundos_milisegundos = segundos * 1000;
    let milisegundos = dias_milisegundos + horas_milisegundos + minutos_milisegundos + segundos_milisegundos;
    console.log(`La cantidad de tiempo de [${dias},dias||${horas},horas||${minutos},minutos||${segundos},segundos] es igual a [${milisegundos}, milisegundos]`);
};
console.log(Conversor(4, 4, 4, 4));
