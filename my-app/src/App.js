import './App.css';
import React from 'react';
//import { products } from './products.json';
//import { useState, useEffect } from 'react'
const _ = require('lodash');

function App() {

const productos = require('./products.json');
const categoriaProductos = productos.results;

//categorias
//Suma de precios de los productos
let cuantiti = 0
categoriaProductos.forEach(item => { cuantiti = cuantiti + item.price });
console.log(`El precio total de los productos es: ${cuantiti}`);

/* const nombre = {};
nombre.pepe = "pepe";
console.log(nombre);

nombre.producto = [{nombre: "felipe"}, {apellido: "ramos"}]
console.log(nombre);

var keyName = "pizzas"
nombre[keyName] = "cualquier";
console.log(nombre); */


//mapeo de categorias
var lista = _.map(categoriaProductos, categoriaProductos.name);



//Guardar categorias en un array

function guardarCategorias(data) {
  var categorias = [];
  data.forEach(item => {
    if (!categorias.includes(item.categoriaProducto.name)) {
      categorias.push(item.categoriaProducto.name);
    }
  });
  return categorias;
}
const categoriasOrdenadas = guardarCategorias(lista);

//impresion de categorias
const listaRenderisada = categoriasOrdenadas.map((item) => <li key={item} >{ item }</li>);

//Pasaje del array de categorias a un objeto
const objeto = Object.assign({}, categoriasOrdenadas);

//Itero sobre el objeto

for(const propiedad in objeto) {
  console.log(`${propiedad}: ${objeto[propiedad]}`);
}

/* console.log(objeto);
console.log(lista); */
//nombre de la categoria
const nombreCategoria = lista.map(item => item.categoriaProducto.name);
function newJson (){
  lista.forEach(() => {
    if(nombreCategoria === "Entradas" || nombreCategoria === "Postres" || nombreCategoria === "Combos  - Premium"){
      console.log("encontrados")
    } else {
      console.log("no entra")
    }
})}

newJson();


//Cuantos porductos de cocina y cuantos de bar??? grab_for


const cocina = lista.filter(item => item.grab_from === "Kitchen");
const bar = lista.filter(item => item.grab_from === "Bar");

console.log(`Hay ${cocina.length} productos de cocina y ${bar.length} de bar`);

//Happy hour => total

const happyHour = lista.map(item => item.happyHour);
let happyHourTotal = 0;
happyHour.forEach(item => {if(item === true){ happyHourTotal = happyHourTotal + 1 }});
console.log(`La cantidad total de productos con Happy Hour es: ${happyHourTotal}`);

//status, cuantos estas activos o no?

const activos = lista.filter(item => item.status === "Active");
console.log(`Hay ${activos.length} productos activos`);

//cuantos productos valen mas o menos de $500
const productosValenMas = lista.filter(item => item.price > 500);
const productosValenMenos = lista.filter(item => item.price < 500);
console.log(`cantidad de productos que valen mas de $500: ${productosValenMas.length}`);
console.log(`cantidad de productos que valen menos de $500: ${productosValenMenos.length}`);

//Cuantos productos tienen al menos un grupo de opciones.
const opciones = lista.map(item => item.gruposOpciones);
let opcionesActivas = 0;
opciones.forEach(item => {
  if (item.length > 0) { 
    opcionesActivas = opcionesActivas + 1;
  }
});
console.log(`Hay ${opcionesActivas} productos con al menos una opcion activa`);

  return (
    <React.Fragment>
      <h1>Ejercicio JSON, abrir consola</h1>
      Ingrese una categoria   
    <input type="text" name="categoriaProduct"/>
    <h3>Categorias disponibles:</h3>
    <ol>
      { listaRenderisada }
    </ol>
    </React.Fragment>
  );
}

export default App;