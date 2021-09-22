//var
var nombre;
console.log(nombre);
var nombre="Martin Elias Diaz";
console.log(nombre);

//let
//let nombre1;
let nombre1="Rafael Diaz";
console.log(nombre1);

//const
const PI=Math.PI;
//PI = 3.1415926;
console.log(PI)

//FUNCIONES
//FUNCION POR DECLARACION
console.group("Cuadrado")
const lado=10;
function areaCuadrado(lado){
     let areac=Math.pow(lado,2);
     return areac;
}
console.log(areaCuadrado(lado));
console.groupEnd();

//FUNCION POR EXPRESION
console.group("Triangulo")
let base=5;
let altura=10;

const areat=function areaTriangulo(base, altura){
    return (base*altura)/2;
}
console.log(areat(base,altura));
console.groupEnd();

//FUNCION POR OBJETO
console.group("Funcion por Objeto")
const saludar=new Function("return 'Buenos dias';");
saludar();
console.groupEnd();

//MOSTRAR EN EL HTML
function calcularAreaCuadrado(){
    const entrada=document.getElementById("InputCuadrado");
    const valor=entrada.value;
    const area=areaCuadrado(valor);
    alert(area+" cm^2");
}

function calcularAreaTriangulo(){
    const entrada=document.getElementById("InputBase");
    const base=entrada.value;
    const entrada1=document.getElementById("InputAltura");
    const altura=entrada1.value;
    const area=areat(base, altura);
    alert(area+" cm^2");
}

//METODOS NUMERICOS
console.group("Metodos Numericos")
let num1= "10";
let num2="10 20";
let num3="10.33";
let n1=Number(num1);
let n2=parseInt(num2);
let n3=parseFloat(num3);
console.log(n1);
console.log(n2);
console.log(n3);
console.groupEnd();

//METODOS STRINGS
console.group("Metodos String")
let cadena="Buenos dias tripulantes, Mision TIC 2022";
let posicion=cadena.indexOf("TIC");
console.log(posicion);
let corte=cadena.slice(25,40);
console.log(corte);
let cadena2=cadena.substring(32,40);
console.log(cadena2);
let ultimo=cadena.lastIndexOf("TIC");
console.log(ultimo);
let mayus=cadena.toUpperCase();
console.log(mayus);
let minus=cadena.toLowerCase();
console.log(minus);
console.groupEnd();

//METODOS STRINGS
console.group("Metodos Arrays")
let electrodomesticos=["televisor","nevera",
"microndas","cafetera","plancha"];
console.log(electrodomesticos);
let orden=electrodomesticos.sort();
console.log(orden);
let cortestr=electrodomesticos.slice(2,3);
console.log(cortestr);
console.groupEnd();