//¡Binguito de Jaimito!

//Clientes Jugadores
class Jugador {
    constructor(nombre, apellido, dni, fichas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.fichas = fichas;
   }
}

const carlos = new Jugador ("Carlos" , "Mendoza", 36512485, 7000);
const josefina = new Jugador ("Josefina" , "Perez", 34215236, 5900);
const victoria = new Jugador ("Victoria" , "Mendez", 33482625, 2800);
const cesar = new Jugador ("Cesar" , "Arredo", 36536952, 15200);
const laura = new Jugador ("Laura" , "Quiroga", 35485326, 11300);
const pedro = new Jugador ("Pedro" , "Nuñez", 32554826, 16400);
const cecilia = new Jugador ("Cecilia" , "Fernandez", 25628415, 13100);
const camila = new Jugador ("Camila" , "Flores", 32562148, 12400);

const arrayJugador = [carlos, josefina, victoria, cesar, laura, pedro, cecilia, camila];
console.log(arrayJugador);



//Menú
function menu() {
    alert("Bienvenido a ¡Binguito de Jaimito!");
    let opcion = parseInt(prompt("Ingrese la opción deseada: \n 1. Alta de jugador \n 2. Baja de jugador \n 3. Modificar datos del jugador \n 4. Consulta de jugador \n 5. Salir del menú"));
    return opcion;
}


//Alta de Jugador
function altaJugador () {
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let dni = parseInt(prompt("Ingrese su dni: "));
    let fichas = parseInt(prompt("Ingrese el monto de sus fichas: "));
    let player = new Jugador (nombre, apellido, dni, fichas);
    arrayJugador.push(player);
    console.log(arrayJugador);
}

//Baja de Jugador
function bajaJugador () {
    let dni = parseInt(prompt("Ingrese el dni del jugador: "));
    let Jugador = arrayJugador.find( Jugador => Jugador.dni === dni);
    let indice = arrayJugador.indexOf(Jugador);
    arrayJugador.splice(indice, 1);
    console.log(arrayJugador);
}

//Modificar datos jugador
function modificacionJugador () {
    let dni = parseInt(prompt("Ingrese el dni del jugador: "));
    let player = arrayJugador.find(player => player.dni === dni);
    let indice = arrayJugador.indexOf(player);
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let fichas = parseInt(prompt("Ingrese el monto de sus fichas: "));
    let jugadorModificado = new Jugador(nombre, apellido, dni, fichas);
    arrayJugador.splice(indice, 1, jugadorModificado);
    console.log(arrayJugador)
}

//Consulta jugador
function consultaJugador() {
    let dni = parseInt(prompt("Ingrese el dni del jugador "));
    let Jugador = arrayJugador.find(Jugador => Jugador.dni === dni);
    console.log(Jugador);
}

//Funcion para salir
function salir() {
    alert("Gracias por ser parte de ¡Binguito de Jaimito!")
}

//Ejecucion del menú
let opcion = menu();
    switch (opcion) {
        case 1:
            altaJugador();
            break;
        case 2:
            bajaJugador();
            break;
        case 3:
            modificacionJugador();
            break;
        case 4:
            consultaJugador();
            break;
        case 5:
            salir();
            break;

        default:
        alert("Opción Incorrecta.\n Por favor intente nuevamente.")
            break;
    }
