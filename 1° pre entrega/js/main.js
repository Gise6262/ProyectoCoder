alert("por favor indique tipo de cliente"); 

let tipoUsuario = prompt("¿Cliente particular o Empresa?");

if (tipoUsuario ==""){
    alert("por favor indique tipo de cliente");
}
if (tipoUsuario =="Empresa"){
       alert("cliente Empresa");
}
if (tipoUsuario =="Particular"){
       alert("cliente Particular");
}
else{
    alert("tipo de usuario ingresado " + tipoUsuario);
}






let rutina = prompt("Ingresar el de hoy o si desea salir escriba ESC"); 
while(rutina.toLocaleLowerCase() != "esc" ){
    
   switch (rutina) {
        case "lunes":
            alert("limpiar la casa e ir al gym");
            break;
        case "martes":
            alert("lavar el auto y sacar la basura");
            break;
        case "miercoles":
            alert("lavar la ropa e ir al supermercado");
            break;
        case "jueves":
            alert("pagar la guarderia de los niños y e ir al gym");
            break;
        case "viernes":
            alert("visitar a los abuelos y salir con amigos");
            break;
        case "sabado":
            alert("dia libre para jugar jueguitos");
            break; 
        case "domingo":
            alert("dia libre para mirar pelis y mimir ;)");
            break;   
       default:
            alert("dale que tenes cosas por hacer");
            break;
   }
   rutina = prompt("Ingresar un dia de la semana. Si desea salir escriba ESC");

   if (rutina == null || rutina.toLowerCase() == "esc")
   {
    console.log("rutina: ", rutina);
        break;
   }
}







const iva = 1.21;

alert ("El servicio de construccion tiene un precio de $10.000 por dia la mano de obra. Por favor ingrese en pesos los dias que necesita para calcular el IVA (% 21)");


let valorCompra = prompt("Por favor ingrese el precio total de los dias que usted necesita.. Ej: 1 dia 10.000,  2 dias 20.000, 3 dias 30.000...");

let total = valorCompra * iva;
alert ("el precio final con iva es un total de " + total); 


