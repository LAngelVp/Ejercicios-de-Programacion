"use strict";
function anagrama(a, b) {
    const text = a.toLowerCase();
    const text2 = b.toLowerCase();
    const array = text.split('').sort();
    const array2 = text2.split('').sort();
    console.log(array);
    console.log(array2);
    if (JSON.stringify(array) == JSON.stringify(array2)) {
        console.log("es anagrama");
    }
    else {
        console.log("No es anagrama");
    }
}
anagrama("amoR", "mora");
