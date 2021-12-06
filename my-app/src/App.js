import './App.css';
import React from 'react';
//import { products } from './products.json';
//import { useState, useEffect } from 'react'

function App() {

var _ = require('lodash');
const productos = require('./products.json');
const categoriaProductos = productos.results;

//categorias
//Suma de precios de los productos
let cuantiti = 0
categoriaProductos.forEach(item => { cuantiti = cuantiti + item.price });
console.log(cuantiti);

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
console.log(objeto);

//Itero sobre el objeto

/* for(const propiedad in objeto) {
  console.log(`${propiedad}: ${objeto[propiedad]}`);
} */

for(const propiedad in objeto) {
  if(categoriasOrdenadas.map((item) => item) === objeto.hasOwnProperty[propiedad]) {Object.defineProperty(objeto, "{propiedad}", {value: categoriasOrdenadas[propiedad]});}}
console.log(objeto);


//Cuantos porductos de cocina y cuantos de bar??? grab_for
//Happy hour => total
//status, cuantos estas activos o no?

//cuantos productos valen mas o menos de $500
const productosValenMas = lista.filter(item => item.price > 500);
const productosValenMenos = lista.filter(item => item.price < 500);
console.log(`cantidad de productos que valen mas de $500: ${productosValenMas.length}`);
console.log(`cantidad de productos que valen menos de $500: ${productosValenMenos.length}`);
//Cuantos productos tienen al menos un grupo de opciones.


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