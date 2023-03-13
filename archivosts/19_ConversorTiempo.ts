/*
 * Reto #19
 * CONVERSOR TIEMPO
 * Fecha publicación enunciado: 09/05/22
 * Fecha publicación resolución: 16/05/22
 * Dificultad: FACIL
 *
 * Enunciado: Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
let Conversor = function (dias:number, horas:number, minutos:number, segundos:number){
    let dias_milisegundos=dias*24*60*60*1000;
    let horas_milisegundos=horas*60*60*1000;
    let minutos_milisegundos=minutos*60*1000;
    let segundos_milisegundos=segundos*1000;
    let milisegundos:number=dias_milisegundos+horas_milisegundos+minutos_milisegundos+segundos_milisegundos;
    console.log(`La cantidad de tiempo de [${dias},dias||${horas},horas||${minutos},minutos||${segundos},segundos] es igual a [${milisegundos}, milisegundos]`);
}
console.log(Conversor(4,4,4,4));