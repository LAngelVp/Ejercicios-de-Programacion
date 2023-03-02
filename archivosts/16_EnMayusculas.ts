/*
 * Reto #16
 * EN MAYÚSCULA
 * Fecha publicación enunciado: 18/04/22
 * Fecha publicación resolución: 25/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
function EnMayusculas(texto:string){
    let textoArray : string[] = texto.split(' ');
    let nueva_Oracion:string = '';
    
    for(let i=0; i < textoArray.length; i++){
        textoArray[i] = textoArray[i][0].toUpperCase() + textoArray[i].substr(1);;
    }
    console.log(textoArray.join(' '));
}
let escrito = EnMayusculas('mi familia es exitosa');
console.log(escrito);