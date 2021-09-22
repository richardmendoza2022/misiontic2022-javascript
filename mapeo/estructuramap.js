//SINTAXIS MAP

const mapa=new Map();
mapa.set("nombre","Richard");
mapa.set("edad",40);
console.log(mapa.get("edad"));
console.log(mapa);
mapa.delete("nombre");

const existeNombre=mapa.has("nombre");
console.log(existeNombre);

mapa.clear();
console.log(mapa);

const letras=["a","b","c","d"]; //array
const mapanuevo=letras.map(item=>item+'++');
console.log("Nuevo Mapa:",mapanuevo);
console.log("Mapa Original:",letras);

//MAP RELOADED
const ordenes=[{
    nombreVendedor:"Andres Felipe",
    total:60,
    entrega:true,
},
{
    nombreVendedor:"Edwin Jesus",
    total:120,
    entrega:false,
},
];
console.log("Original de Ventas:", ordenes);

const respuesta=ordenes.map((item)=>item.total);
console.log("Respuesta:",respuesta);

const respuesta2=ordenes.map((item)=> {return{...item,impuesto: 0.19,};});
console.log("Respuesta:",respuesta2);

//FILTER()
const tecnologias=["Javascript ECMA 6", "HTML 5", "CSS 3", "Angular"];
const nuevasTecnologias=tecnologias.filter((element)=>element.length>=6);
console.log(nuevasTecnologias);

//REDUCE()
const totales=[1,2,3,4];

let suma=0;
for(let indice=0;indice<totales.length;indice++){
    const elemento=totales[indice];
    suma=suma+elemento;
}
console.log(suma);
console.log(totales);

const respuesta=totales.reduce((suma,elemento)=>suma+elemento,0);
console.log(respuesta);

const totales=[1,2,3,3];
const respuesta2=totales.reduce((objeto, elemento)=>{
    if(!objeto[elemento]){
        objeto[elemento]=1;
    }
    else
    {
        objeto[elemento]=objeto[elemento]+1;
    }
    return objeto;
    }, {});
console.log(respuesta2);

//SOME
const totales=[1,3,5];
let bandera=false;
const respuesta2=totales.some((item)=>item%2===0);
console.log("Respuesta:", respuesta2);
