/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

// interface Pologono{
//     base:number;
//     altura:number;
//     area():number;
// }
class Triangulo{
    constructor(private base:number,private altura:number){}
    get bas(){
        return this.base;
    }
    set bas(base){
        this.base = base;
    }
    get alt(){
        return this.altura;
    }
    set alt(altura){
        this.altura = altura;
    }
    areaTriangulo(){
        let resultado = (this.base * this.altura)/2;
        console.log(`Triangulo: ${resultado} mts de Area`);
    }
}
class Rectangulo{
    constructor(private base:number,private altura:number){}
    get bas(){
        return this.base;
    }
    set bas(base){
        this.base = base;
    }
    get alt(){
        return this.altura;
    }
    set alt(altura){
        this.altura = altura;
    }
    areaRectangulo(){
        let resultado = this.base * this.altura;
        console.log(`Reactangulo: ${resultado} mts de Area`);
    }
}
class Cuadrado{
    constructor(private base:number,private altura:number){}
    get bas(){
        return this.base;
    }
    set bas(base){
        this.base = base;
    }
    get alt(){
        return this.altura;
    }
    set alt(altura){
        this.altura = altura;
    }
    areaCuadrado(){
        let resultado = this.base * this.altura;
        console.log(`Cuadrado: ${resultado} mts de Area`);
    }
}
let triangulo = new Triangulo(12,12).areaTriangulo();
let rectangulo = new Rectangulo(12,12).areaRectangulo();
let cuadrado = new Cuadrado(12,12).areaCuadrado();
console.log(triangulo);
console.log(rectangulo);
console.log(cuadrado);
