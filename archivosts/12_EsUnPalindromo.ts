/*
 * Reto #12
 * ¿ES UN PALÍNDROMO?
 * Fecha publicación enunciado: 21/03/22
 * Fecha publicación resolución: 28/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba un texto y retorne verdadero o falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
function Palindromo(texto:string){
    let nuevoTexto = '';
    let TextoGenerado = '';
    let textoOriginal = '';
    let minusculas=texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for(let i = minusculas.length -1; i>=0; i--){
        nuevoTexto += minusculas[i];
    }
    TextoGenerado = nuevoTexto.split('').join('').replace(/\s+/g, '');
    textoOriginal=minusculas.replace(/\s+/g, '');
    if(TextoGenerado === textoOriginal){
        console.log('ESTO ES UN PALINDROMO');
    }else{
        console.log('ESTO "NO ES UN PALINDROMO"');
    }
};
let nuevo = Palindromo('Ana lleva al oso la avellana');
console.log(nuevo);