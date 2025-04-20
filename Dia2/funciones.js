///Bases de datos///
let usuarios = [
    {"id":1,
        "name":"Simon",
        "last-name":"Dante",
        "age":45
    },
    {"id":2,
        "name":"Naya",
        "last-name":"Liz",
        "age":18
    },
    {
        "id":3,
        "name":"Andres",
        "last-name":"Gomez",
        "age":55
    }
];

///funcion añadir datos///
export function anadir(){
    let id= usuarios.length+1;
    let name=prompt("Ingrese el nombre del nuevo usuario");
    let last=prompt("Ingrese el apellido del nuevo usuario");
    let age= parseInt(prompt("Ingrese la edad del nuevo usuario"));
    usuarios.push({
        "id":id,
        "name":name,
        "last-name":last,
        "age":age
    });
}

///Funcion ver Usuarios///
export function ver(){
    let leng= usuarios.length;
    for (let i=0;i<leng;i++){
        alert(
            "Estudiante# " + (i+1) + "\n" +
            "id: " + usuarios[i]["id"] + "\n" +
            "Nombre: " + usuarios[i]["name"] + "\n" +
            "Apellidos: " + usuarios[i]["last-name"] + "\n" +
            "Edad: " + usuarios[i]["age"]
        );
};
}

///Funcion eliminar usuario///
export function eliminar(){
    ver();
    let eli=prompt("Ingrese el id del usuario que quieres eliminar");
    usuarios.pop(eli-1);
}

///Funcion Editar datos///
export function editar(){
    ver();
    let usu=prompt("Ingrese el id del usuario que quiere editar");
    let nname=prompt("Ingrese el nuevo nombre del usuario");
    let nlast=prompt("Ingrese el nuevo apellido del usuario");
    let nage=prompt("Ingrese la nueva edad del usuario");
    usuarios[usu-1]["name"]=nname;
    usuarios[usu-1]["last-name"]=nlast;
    usuarios[usu-1]["age"]=nage;
}