const {Categoria} = require('../models');

async function getAll() {
    const categorias = await Categoria.findAll();
    return categorias;
}


console.log(getAll());