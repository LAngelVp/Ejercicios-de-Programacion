"use strict";
class Triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    get bas() {
        return this.base;
    }
    set bas(base) {
        this.base = base;
    }
    get alt() {
        return this.altura;
    }
    set alt(altura) {
        this.altura = altura;
    }
    areaTriangulo() {
        let resultado = (this.base * this.altura) / 2;
        console.log(`Triangulo: ${resultado} mts de Area`);
    }
}
class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    get bas() {
        return this.base;
    }
    set bas(base) {
        this.base = base;
    }
    get alt() {
        return this.altura;
    }
    set alt(altura) {
        this.altura = altura;
    }
    areaRectangulo() {
        let resultado = this.base * this.altura;
        console.log(`Reactangulo: ${resultado} mts de Area`);
    }
}
class Cuadrado {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    get bas() {
        return this.base;
    }
    set bas(base) {
        this.base = base;
    }
    get alt() {
        return this.altura;
    }
    set alt(altura) {
        this.altura = altura;
    }
    areaCuadrado() {
        let resultado = this.base * this.altura;
        console.log(`Cuadrado: ${resultado} mts de Area`);
    }
}
let triangulo = new Triangulo(12, 12).areaTriangulo();
let rectangulo = new Rectangulo(12, 12).areaRectangulo();
let cuadrado = new Cuadrado(12, 12).areaCuadrado();
console.log(triangulo);
console.log(rectangulo);
console.log(cuadrado);
