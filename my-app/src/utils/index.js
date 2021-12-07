const _ = require('lodash');

export function index(parametro) {

    //mapeo de categorias
    var lista = _.map(parametro, parametro.name);

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

    //objeto de categorias
    const felipe = {};
    categoriasOrdenadas.forEach(item => {
        felipe[item] = parametro.filter(item2 => item2.categoriaProducto.name === item)
    });

    return felipe;
}