/*
 * Reto #11
 * ELIMINANDO CARACTERES
 * Fecha publicación enunciado: 14/03/22
 * Fecha publicación resolución: 21/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
function eliminar(str1 : string, str2 : string){
    let str1Minusculas : string = str1.toLowerCase();
    let str2Minusculas : string = str2.toLowerCase();
    let array1: string [] = str1Minusculas.split('');
    let array2: string [] = str2Minusculas.split('');
    let out1 : string[] = [];
    let out2 : string[] = [];
    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if(array1[i] == array2[j]){
                out1.push(array2[j]);
                delete(array2[j]);
            }
        }
    }
    out2 = array2;
    console.log(out1);
    console.log(out2);

}
let ingresarDatos = eliminar('Luis', 'Manuel');
console.log(ingresarDatos);