"use strict";
var suma = function (a, b) {
    return a + b;
};
console.log(suma(5, 3));
//let sumaFlecha = (a:number, b:number) => a + b;
var sumaFlecha = function (a, b) {
    return a + b;
};
console.log(sumaFlecha(3, 2));
var obtenerNombre = function () {
    return "Juan Perez";
};
var obtenerNombreFlecha = function () { return "Juan Perez"; };
console.log(obtenerNombreFlecha());
