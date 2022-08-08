const {Produto} = require('../database/models/Produto');
const storage = require('../middlewares/storage');
const fs = require('fs');

const uploadImagem = storage('imagem', '/produtos')

const adminController = {
    getPainelAdmin: (req, res) => {
        const produtos = Produto.findAll()
        return res.render('adm/painelAdmin', {produtos: produtos});
      
    },
    getProduto: (req, res) => {
        const {id} = req.params
        const produtos = Produto.findById(id)
       
        return res.render('adm/detalhes', {produtos: produtos})
    },
    addProduct: (req, res) => {
        return res.render('adm/adicionarProduto' );
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

        Produto.save(produto);

        return res.redirect('/adm/paineladmin');
    })
    },
    editProduct: (req, res) => {
        const {id} = req.params;
        const produto = Produto.findById(id);
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

        Produto.update(id, produto);

        return res.redirect('/adm/paineladmin');
    },
    deleteProduct: (req, res) => {
        const {id} = req.params;
        const produtos = Produto.findById(id);
        return res.render('adm/deletarProduto', {produtos: produtos });
    },
    destroyProduct: (req, res) => {
        const {id} = req.params;
        Produto.delete(id);
        try {
            fs.unlinkSync('./public' + produto.imagem)
          } catch(err) {
            console.error(err)
          }
        return res.redirect('/adm/paineladmin');
    }
}

module.exports = adminController;