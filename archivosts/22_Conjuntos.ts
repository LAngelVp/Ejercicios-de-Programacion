/*
 * Reto #22
 * CONJUNTOS
 * Fecha publicación enunciado: 01/06/22
 * Fecha publicación resolución: 07/06/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
let Conjunto = function(array1:string[], array2:string[], bol:boolean){
    let retorno_array:string[]=[];
    let retorno_array1:string[]=[];
    if (bol==true){
        for(let a=0;a<=array1.length; a++){
            for(let b=0; b<=array2.length;b++){
                if(array1[a] == array2[b]){
                    retorno_array.push(array2[b]);
                    delete(array2[b]);
                }
            }
        }
    }
    if(bol==false){
        for(let a=0;a<=array1.length; a++){
            for(let b=0; b<=array2.length;b++){
                if(array1[a] == array2[b]){
                    retorno_array.push(array2[b]);
                    delete(array2[b]);
                    console.log(array2)
                }else{
                    retorno_array1.push(array1[a]);
                    delete(array1[a]);
                    console.log(retorno_array1)
                }
            }
        }
    }
    // console.log(retorno_array);
    // console.log(array2)
}
let resultado = Conjunto(["L","U","I","S","A"],["L","U","I","S"],false)