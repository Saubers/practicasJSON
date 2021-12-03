import './App.css';
import React from 'react';
//import { products } from './products.json';
//import { useState, useEffect } from 'react'

function App() {

var _ = require('lodash');
const productos = require('./products.json');
const categoriaProductos = productos.results

//categorias
//categoriaProductos.forEach(item => console.log(item.categoriaProducto.name));

//mapeo de categorias
var lista = _.map(categoriaProductos, categoriaProductos.name);

//impresion de categorias
const listaImpresa = lista.map((item) => <li key={item.id}>{item.name}</li>);


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