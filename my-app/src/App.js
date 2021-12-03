import './App.css';
import React from 'react';
//import { products } from './products.json';
//import { useState, useEffect } from 'react'

function App() {

var _ = require('lodash');
const productos = require('./products.json');
const categoriaProductos = productos.results
let cuantiti = 0

//categorias
//Suma de productos (precios)
categoriaProductos.forEach(item => { cuantiti = cuantiti + item.price });
console.log(cuantiti);


const myFunction = (name) => {console.log(name)}
myFunction("felipe");

//mapeo de categorias
var lista = _.map(categoriaProductos, categoriaProductos.name);

//impresion de categorias
const listaImpresa = lista.map((item) => <li key={item.id}>{item.name}</li>);

//Cuantos porductos de cocina y cuantos de bar??? grab_for
//Happy hour => total
//status, cuantos estas activos o no?
//cuantos productos valen mas o menos de $500
//CUantos productos tienen al menos un grupo de opciones.


  return (
    <React.Fragment>
      <h1>Ejercicio JSON, abrir consola</h1>
      Ingrese una categoria
    <input type="text" name="categoriaProduct"/>
    <ul>
      { listaImpresa }
    </ul>
    </React.Fragment>
  );
}

export default App;