// API CRIADA PARA CONSUMO DO CHART
const {Produto} = require('../models');
const apiController = {
    getAllHeadset: async (req, res) => {
        const headsets = await Produto.count({where: {categorias_id: 1}});
        return res.json(["headsets", headsets]);
    },
    getAllTeclados: async (req, res) => {
        const teclados = await Produto.count({where: {categorias_id: 2}});
        return res.json(["teclados", teclados]);
    },
    getAllNotebooks: async (req, res) => {
        const notebooks = await Produto.count({where: {categorias_id: 3}});
        return res.json(["notebookes", notebooks]);
    },
    getAllTelefone: async (req, res) => {
        const telefones = await Produto.count({where: {categorias_id: 4}});
        return res.json(["telefones", telefones]);
    },
    getAllVideoGames: async (req, res) => {
        const videoGames = await Produto.count({where: {categorias_id: 5}});
        return res.json(["videoGames", videoGames]);
    },

    getProducts : async (req, res) => {
        const products = await Produto.findAll();
        const array = products.map(product => {
            return [`sku ${product.id}`, product.estoque];
        })
        return res.json(array);
    }
}

module.exports = apiController;