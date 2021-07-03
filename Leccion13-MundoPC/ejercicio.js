class DispositivoEntrada{
    _tipoEntrada = "";
    _marca = "";

    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get TipoEntrada(){
        return this._tipoEntrada;
    }

    get Marca(){
        return this._marca;
    }

    set TipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }

    set Marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    _idRaton = 0;
    static contadorRatones = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }    
}

class Teclado extends DispositivoEntrada{
    _idTeclado = 0;
    static contadorTeclador = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclador;
    }

    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Monitor{
    _idMonitor = 0;
    _marca = "";
    _tamano = "";
    static contadorMonitores = 0;

    constructor(marca,tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }

    get IdMonitor(){
        return this._idMonitor;
    }

    get Marca(){
        return this._marca;
    }

    get Tamano(){
        return this._tamano;
    }

    set Marca(marca){
        this._marca = marca;
    }

    set Tamano(tamano){
        this._tamano = tamano;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamano}]`;
    }
}

class Computadora{
    _idComputadora = 0;
    _nombre = "";
    _monitor = null;
    _teclado = null;
    _raton = null;
    static contadorComputadora = 0;

    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get IdComputadora(){
        return this._idComputadora;
    }

    get Nombre(){
        return this._nombre;
    }

    get Monitor(){
        return this._monitor.toString();
    }

    get Teclado(){
        return this._teclado.toString();
    }

    get Raton(){
        return this._raton.toString();
    }

    set Nombre(nombre){
        this._nombre = nombre;
    }

    set Monitor(monitor){
        this._monitor = monitor;
    }

    set Teclado(teclado){
        this._teclado = teclado;
    }

    set Raton(raton){
        this._raton = raton;
    }

    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

class Orden{
    _idOrden = 0;
    _computadora = null;
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadora = [];
    }

    agregarComputadora(computadora){
        this._computadora.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for( let computadora of this._computadora ){
            computadorasOrden += `\n${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }

    toString(){
        return `Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`;
    }

    get IdOrden(){
        return this._idOrden;
    }

    get Computadora(){
        return this._computadora;
    }

    set Computadora(computadora){
        this._computadora = computadora;
    }
}

let raton1 = new Raton('USB', 'HP');
console.log( raton1.toString() );
let raton2 = new Raton('Bluetooth', 'Dell');
raton2.marca = 'HP';
console.log( raton2.toString() );

let teclado1 = new Teclado('Bluetooth', 'MSI');
let teclado2 = new Teclado('USB', 'Acer');
console.log( teclado1.toString() );
console.log( teclado2.toString() );

let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);
console.log( monitor1.toString() );
console.log( monitor2.toString() );

let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
console.log( `${computadora1}` );
let computadora2 = new Computadora('Armada', monitor2, raton2, teclado2);
console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();