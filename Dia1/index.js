// #####################################
// Ejercicios DIA 1
// #####################################

//Mis primeros pasos en Javascript
console.log('Holiiii');
//Dato primitivos - Numeros "Enteros/Decimales" - No hay diferencia para JS
numerito1 = 1;
numerito2 = 2.14;
console.log(typeof numerito1);
console.log(typeof numerito2);
numerito3 = numerito1 + numerito2;
//Concatenación general
console.log(numerito3+" "+typeof numerito3);
//Operaciones Generales (PEMDAS)
operacion=(((((5*2)**2)+256)/5)*2);
console.log(operacion);
operacion2 = operacion%2;
console.log(operacion2);
//Booleanos - Operadores lógicos
booleano1= true;
booleano2=false;
booleano3= false;
booleano4 = true;
operadoresBandera =(booleano1 && booleano2);
console.log(operadoresBandera); 
// Funcion sin parámetros y sin retorno
function mensaje(){
    console.log("Holiiis");
};
mensaje();
//Funcion sin parámetros pero con retorno
function mensajesR(){
    return "Holissss con retorno";
};
console.log(mensajesR()+ " y mensaje adicional!!!");
//Funcion con parámetros pero sin retorno
function suma(a,b){
    console.log(a+b);
};
suma(5,7);
//Tipo de variable let
let saludar = "Holas";
saludar = "campuslands";
//Tipo de variable var
var saludo1 = "Saludo falso";
var saludo1 = 1;
//Tipo de variable const
const contrasenaDelicada = 1234567890;
//contrasenaDelicada = 6;

//Condicional if - else
let booleanito = false;
if(booleanito == true){
    console.log("Booleanito es verdadero en su ser!");
}else{
    console.log("Booleanito es severo falso!");
};

//el "huilé" - while
let booleanito2 = true;
while(booleanito2 == true){
    console.log("Que viva el estudio!");
    booleanito2=false;
}
//for "todo lo que empieza - termina"
for(let i=1;i<10;i=i+1){
    console.log(i);
}
// Declaración de una variable de arreglo (array)
let numeros = [1, 2, 3, 4, 5];
let colores = ["rojo", "verde", "azul"];
console.log(numeros[3]);
console.log(colores[1]);
//Agregar elemento en array
colores.push("negro");
console.log(colores);
// Declaración de una variable de objeto (object)
let persona = {
  nombre: "Juan",
  edad: 30,
  esEstudiante: true
};
