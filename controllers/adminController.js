const ProdutoModel = require('../models/produtosModel');
const multer = require('multer');

const adminController = {
    getPainelAdmin: (req, res) => {
        res.render('adm/painelAdmin');
    },
    addProduct: (req, res) => {
        res.render('adm/adicionarProduto');
    },
    storeProduct: (req, res) => {
        const { nome, preco, imagem, ativo, descricao } = req.body;
        const produto = {
            nome,
            preco,
            imagem,
            ativo: (ativo ? true : false),
            descricao
        };

        ProdutoModel.save(produto);

        return res.redirect('/adm/paineladmin');
    },
    editProduct: (req, res) => {
        const {id} = req.params;
        const produto = ProdutoModel.findById(id);
        res.render('adm/editarProduto', {produto});
    },
    updateProduct: (req, res) => {
        const {id} = req.params;
        const {nome, imagem, preco, ativo, descricao} = req.body;
        const produto = {
            id,
            nome,
            imagem,
            preco,
            ativo: (ativo ? true : false),
            descricao
        }

        ProdutoModel.update(id, produto);

        return res.redirect('/adm/paineladmin');
    },
    deleteProduct: (req, res) => {
        res.render('adm/deletarProduto');
    },
    destroyProduct: (req, res) => {
        const {id} = req.params;
        ProdutoModel.delete(id);
        return res.redirect('/adm/paineladmin');
    }
}

module.exports = adminController;