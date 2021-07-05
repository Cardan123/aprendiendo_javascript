'use strict'

function suma(){
    let form = document.forms['formulario'];
    let operandoA = parseInt(form['operandoa'].value);
    let operandoB = parseInt(form['operandob'].value);
    let resultado = operandoA+operandoB;
    console.log(operandoA);
    console.log(operandoB);
    document.getElementById('resultado').innerHTML = `Resultado de la suma: ${resultado}`;
}