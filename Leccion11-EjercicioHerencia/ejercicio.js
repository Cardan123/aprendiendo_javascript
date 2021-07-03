class Persona{
    _idPersona = 0;
    _nombre = "";
    _apellido = "";
    _edad = 0;
    static contadorPersonas = 0;

    constructor(nombre,apellido,edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get getIdPersona(){
        return this._idPersona;
    }

    get Nombre(){
        return this._nombre;
    }

    get Apellido(){
        return this._apellido;
    }

    get Edad(){
        return this._edad;
    }

    set Nombre(nombre){
        this._nombre = nombre;
    }

    set Apellido(apellido){
        this._apellido = apellido;
    }

    set Edad(edad){
        this._edad = edad;
    }

    toString(){
        return this._idPersona+" "+this._nombre+" "+this._apellido+" "+this._edad;
    }

}

class Empleado extends Persona{
    _idEmpleado = 0;
    _sueldo = 0;

    static contadorEmpleados = 0;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get IdEmpleado(){
        return this._idEmpleado;
    }

    get Sueldo(){
        return this._sueldo;
    }

    set Sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + ", "+this._idEmpleado+" "+ + this._sueldo;
    }
}

class Cliente extends Persona{
    _idCliente = 0
    _fechaRegistro = new Date()

    static contadorClientes = 0;

    constructor(nombre,apellido,edad,fecha){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fecha;
    }

    get IdCliente(){
        return this._idCliente;
    }

    get FechaRegistro(){
        return this._fechaRegistro;
    }

    set FechaRegistro(fecha){
        this._fechaRegistro = fecha;
    }

    toString(){
        return super.toString()+", "+this._idCliente+" "+this._fechaRegistro;
    }
}

let persona1 = new Persona('Juan', 'Perez', 28);
console.log( persona1.toString());

let persona2 = new Persona('Carlos', 'Ramirez', 35);
console.log( persona2.toString() );

let empleado1 = new Empleado('Karla', 'Gomez', '25', 5000);
console.log(empleado1.toString());
let empleado2 = new Empleado('Laura', 'Quintero', 33, 7000);
console.log( empleado2.toString() );

let cliente1 = new Cliente('Miguel', 'Cervantes', 30, new Date());
console.log( cliente1.toString() );

let cliente2 = new Cliente('Maria', 'Lara', 38, new Date());
console.log(cliente2.toString());