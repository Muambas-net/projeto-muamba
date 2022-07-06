const ProdutoModel = require('../models/produtosModel');
const storage = require('../middlewares/storage');
const fs = require('fs');

const uploadImagem = storage('imagem', '/produtos')

const adminController = {
    getPainelAdmin: (req, res) => {
        return res.render('adm/painelAdmin');
    },
    addProduct: (req, res) => {
        return res.render('adm/adicionarProduto');
    },
    storeProduct: (req, res) => {
        uploadImagem(req, res, (err) => {
        const { nome, preco, desconto, estoque, categoria, imagem, ativo, descricao } = req.body;
        const produto = {
            nome,
            preco,
            desconto,
            estoque,
            categoria,
            imagem: '/images/produtos/' + req.file.filename,
            ativo: (ativo ? true : false),
            descricao
        };

        ProdutoModel.save(produto);

        return res.redirect('/adm/paineladmin');
    })
    },
    editProduct: (req, res) => {
        const {id} = req.params;
        const produto = ProdutoModel.findById(id);
        return res.render('adm/editarProduto', {produto});
    },
    updateProduct: (req, res) => {
        const {id} = req.params;
        const {nome, imagem, preco, desconto, estoque, categoria, ativo, descricao} = req.body;
        const produto = {
            id,
            nome,
            imagem,
            preco,
            desconto,
            estoque,
            categoria,
            ativo: (ativo ? true : false),
            descricao
        }

        ProdutoModel.update(id, produto);

        return res.redirect('/adm/paineladmin');
    },
    deleteProduct: (req, res) => {
        return res.render('adm/deletarProduto');
    },
    destroyProduct: (req, res) => {
        const {id} = req.params;
        ProdutoModel.delete(id);
        try {
            fs.unlinkSync('./public' + produto.imagem)
          } catch(err) {
            console.error(err)
          }
        return res.redirect('/adm/paineladmin');
    }
}

module.exports = adminController;