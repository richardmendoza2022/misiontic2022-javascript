//ARRAYS
/*
var frutas=["Manzana","Pera","Naranja","Banano"];
console.log(frutas);
console.log(frutas[0]);//index
console.log(frutas.length) //Longitud
//MUTAR UN ARRAY
var masFrutas=frutas.push("Granadilla");// Añadir
console.log(masFrutas);
console.log(frutas);
var ultimo=frutas.pop() //Eliminar
console.log(ultimo);
console.log(frutas);
//AÑADE AL PRINCIPIO DEL ARRAY
var nuevoElemento=frutas.unshift("Sandia");
console.log(nuevoElemento);
console.log(frutas);
var borrarFruta=frutas.shift();
console.log(borrarFruta);
console.log(frutas);
var posicion=frutas.indexOf("Naranja");
console.log(posicion);
//FUNCIONES SIMPLES (FUNCTION)
//f(x)=x^2;
var valorx=5;
console.log(valorx);
function elevarCuadrado(valx){
    return valx*valx;
}
console.log(elevarCuadrado(valorx))

var base=4;
var exponente=4;
console.log(base);
console.log(exponente);
function exponenciar(base,altura){
    return Math.pow(base,altura);
}
console.log(exponenciar(base,exponente))
*/
//CICLOS
//FOR
var estudiantes=["Jose", "Luis","Juan","Nini","Vanesa",
"Erika"];
console.log(estudiantes);

function saludarEstudiantes(estudiante){
    //console.log(`Buenos Dias, ${estudiante}`);
    console.log("Buenos Dias, "+estudiante);
}
/*
for(var cont=0;cont<estudiantes.length;cont++){
    console.log(estudiantes[cont]);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
*/
//WHILE
var cont=0;
while(cont<estudiantes.length){
    console.log(estudiantes[cont]);
    cont++;
}

// while(estudiantes.length>0){
//     var estudiante=estudiantes.shift();
//     saludarEstudiantes(estudiante);
// }

//DO WHILE
var cont=0;
do{
    saludarEstudiantes(estudiantes[cont]);
    cont++;
}while(cont<estudiantes.length);

//OBJETOS
var listaAutos=[
    {
        marca:"Mazda",
        modelo:"323",
        annio:1985
    },
    {
        marca:"Ford",
        modelo:"Explorer",
        annio:1999
    },
    {
        marca:"BMW",
        modelo:"Z4",
        annio:2015
    },
    {
        marca:"Mazda",
        modelo:"CX-30",
        annio:2015
    }
]
//FILTER
console.log(listaAutos);
var resultado=listaAutos.filter(function(auto){
    return auto.annio===2015;});
console.log(resultado);
//MAP
var autosFiltrados=listaAutos.map(function(auto){
    return auto.modelo;
});
console.log(autosFiltrados);
