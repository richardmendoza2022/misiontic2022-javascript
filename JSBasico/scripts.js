//VALORES EN JS
/*
//NUMBER
var num1=50;
console.log(num1);
//STRING
var saludo="Hola Mundo";
console.log(saludo);
//UNDEFINED
var variablesinasignar;
console.log(variablesinasignar);
//BOOLEAN
var bool=true;
console.log(bool);
var bool=false;
console.log(bool);
//NULL O NULO
var nula=null;
console.log(nula);
//OBJETO
var instancia1={};
console.log(instancia1);
var instancia2=[];
console.log(instancia2);
//VARIABLES
//ARRAYS
var arreglo=["audifonos","laptop","smartphone","monopatin"];
console.log(arreglo);
console.log(arreglo[0]);
//OBJETO
var carro={
    marca:"BMW",
    modelo:"A3",
    annio:2021
}
console.log(carro)

//SCOPE O ALCANCE
//SCOPE LOCAL
function nombreFuncion(){
    var variablelocal="Variable Local";
    console.log(variablelocal);
}
console.log(nombreFuncion());
//console.log(variablelocal);
//SCOPE GLOBAL
var variableglobal="Variable Global";
function nombreFuncion(){
    console.log(variableglobal);
}
console.log(nombreFuncion());
console.log(variableglobal);

//HOISTING JS
var variablelocal="Prueba de Hoisting";
console.log(variablelocal);
console.log(nombreFuncion());
function nombreFuncion(){
    console.log(variablelocal);
}
//COERCION JS
//COERCION IMPLICITA
var num1=7;
var num2="8";
var resultado=num1+num2;
console.log(resultado);
//COERCION EXPLICITA
var num1=7;
var num2=Number("8");
var resultado=num1+num2;
console.log(resultado);
//OPERACIONES
var num1=7;
var num2="7";
var num3=8;
var resultado=num1+num2;
console.log(resultado);
var resultado=num1-num2;
console.log(resultado);
var resultado=num1*num2;
console.log(resultado);
var resultado=num1/num2;
console.log(resultado);
//IGUALACION
console.log(num1==num2);
console.log(num1===num2);
//DESIGUALDADES
console.log(num3<num1);
console.log(num3>num1);
//OPERADORES LOGICOS
//AND
var sentencia1=true;
var sentencia2=true;
var valorVerdad=sentencia1 && sentencia2;
console.log(valorVerdad);
//OR
var sentencia1=false;
var sentencia2=true;
var valorVerdad=sentencia1 || sentencia2;
console.log(valorVerdad);

//CONDICIONALES
//CONDICIONAL SIMPLE IF

var nota=2.9;
console.log("Nota:"+nota);

if (nota<3){
    console.log("INSUFICIENTE");
}
//CONDICIONAL ALTERNATIVA IF ELSE
/*
if (nota<4){
    console.log("ACEPTABLE")
}else{
    console.log("BIEN")
}*/
/*
//CONDICIONAL ANIDADO
if (nota<4){
    console.log("ACEPTABLE")
}else if(nota<5){
    console.log("SOBRESALIENTE")
}else{
    console.log("EXCELENTE")
}
//OPERADOR TERNARIO
var calificacion=nota<3 ? console.log("SUSPENDIDO"):console.log("APROBADO");
*/
//SWITCH
var nota=1;
console.log("Nota:"+nota);

switch(nota){
    case 5:
        console.log("EXCELENTE");
        break;
    case 4:
        console.log("SOBRESALIENTE");
        break;
    case 3:
        console.log("ACEPTABLE");
        break;
    case 2:
        console.log("INSUFICIENTE");
        break;
    default:
        console.log("VALOR NO EVALUADO");
}

function saludar() {
  return "Hola";
}
saludar(); // 'Hola'
typeof saludar; // 'function'

// El segundo "saludar" (nombre de la función) se suele omitir: es redundante
const saludo = function saludar() {
    return "Hola";
  };
  
saludo(); // 'Hola'

const saludar = new Function("return 'Hola';");
saludar(); // 'Hola'