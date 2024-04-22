import Cliente from "./clases/Cliente.js";
import Impuesto from "./clases/Impuesto.js";



const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event) => {
event.preventDefault();

let datos = new FormData(formulario);
let datosNombre = datos.get("name");
let datosSueldo = datos.get("montoBrutoAnual");
let datosDeducciones = datos.get("deducciones");

let impuesto1 = new Impuesto(datosSueldo, datosDeducciones);

let cliente1 = new Cliente(datosNombre, impuesto1);



let mensaje = document.querySelector("#parrafoNombre");
let mensaje2 = document.querySelector("#parrafoSueldo");
let mensaje3 = document.querySelector("#parrafoDeducciones");
let mensaje4 = document.querySelector("#parrafoImpuestos");

mensaje.innerText = "";
mensaje2.innerText = "";
mensaje3.innerText = "";
mensaje4.innerText = "";

mensaje.innerText += `Nombre del Cliente: ${cliente1.nombre}`;
mensaje2.innerText += `Sueldo Bruto Anual: ${impuesto1.montoBrutoAnual}`;
mensaje3.innerText += `Deducciones: ${impuesto1.deducciones}`;
mensaje4.innerText += `Impuesto Calculado: ${cliente1.calcularImpuesto()}`;

formulario.reset();

});


// let impuesto1 = new Impuesto(1200000, 230000);
// console.log(impuesto1.montoBrutoAnual);

// let cliente1 = new Cliente("Mario",impuesto1);
// console.log(cliente1.calcularImpuesto());

// console.log(cliente1.nombre);


 
