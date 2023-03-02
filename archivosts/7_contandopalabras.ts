/*
 * Reto #7
 * CONTANDO PALABRAS
 * Fecha publicación enunciado: 14/02/22
 * Fecha publicación resolución: 21/02/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

// const text = 'hola que tal, tal que mi nombre es Jhon Doe, estoy aqui, aqui estoy en una charla informativa'
const text = 'Holamundo como estas Hola hola Hola Mundo holamundo.'
const words = text.replace(/[^a-zA-Z0-9 ]/g, "").split(" ").map( w => w.toLowerCase())
let repetidos : any []=[];
words.forEach(word => {
  const arrayFilter = words.filter(t => t === word)
  if (arrayFilter.length > 1) {
    if (repetidos.filter(r => r.word === word).length === 0) repetidos.push({
      word,
      total: arrayFilter.length
    })
  }
})
console.log(repetidos)