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
//console.log(cuantiti);

/* const nombre = {};
nombre.pepe = "pepe";
console.log(nombre);

nombre.producto = [{nombre: "felipe"}, {apellido: "ramos"}]
console.log(nombre);

var keyName = "pizzas"
nombre[keyName] = "cualquier";
console.log(nombre);*/


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
console.log(categoriasOrdenadas);

//impresion de categorias
const listaRenderisada = categoriasOrdenadas.map((item) => <li key={item} >{ item }</li>);


/* const Objeto  */

//Cuantos porductos de cocina y cuantos de bar??? grab_for
//Happy hour => total
//status, cuantos estas activos o no?
//cuantos productos valen mas o menos de $500
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