'use strict'

const personas = [
    new Persona('Juan','Perez'),
    new Persona('Karla','Lara')
];

function mostrarPersonas(){
    let texto = '';
    for(let persona of personas){
        texto += `<li> ${persona.nombre} ${persona.apellido} </li>`
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    let form = document.forms['formulario'];
    let nombre = form['nombre'].value;
    let apellido = form['apellido'].value;
    if(nombre != '' || apellido != ''){
        personas.push(new Persona(nombre,apellido));
    }else{
        console.log('No hay información que agregar');
    }
    mostrarPersonas();
}
