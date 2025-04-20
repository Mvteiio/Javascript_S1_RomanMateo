// #####################################
// Ejercicios DIA 3
// #####################################
//Importaciones de js externos//
import * as funciones from './funciones.js';

///Menu Principal///
let bo=true;
while (bo==true){
    let opcion=prompt(
        "Bienvenido\n" +
        "¿que desea hacer?\n" +
        "1. ver datos\n" +
        "2. editar datos\n" +
        "3. eliminar datos\n" +
        "4. añadir datos\n" +
        "5. salir del programa"
    );
    if (opcion=="1"){
        funciones.ver();
    }
    else if (opcion=="2"){
        funciones.editar();
    }
    else if (opcion=="3"){
        funciones.eliminar();
        alert("El usuario fue eliminado correctamente");
    }
    else if (opcion=="4"){
        funciones.anadir();
    }
    else if (opcion=="5"){
        alert("Gracias por usar nuestro sistema");
        bo=false
    }
}