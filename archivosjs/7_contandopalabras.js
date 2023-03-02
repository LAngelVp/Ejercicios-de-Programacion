"use strict";
const text = 'Holamundo como estas Hola hola Hola Mundo holamundo.';
const words = text.replace(/[^a-zA-Z0-9 ]/g, "").split(" ").map(w => w.toLowerCase());
let repetidos = [];
words.forEach(word => {
    const arrayFilter = words.filter(t => t === word);
    if (arrayFilter.length > 1) {
        if (repetidos.filter(r => r.word === word).length === 0)
            repetidos.push({
                word,
                total: arrayFilter.length
            });
    }
});
console.log(repetidos);
