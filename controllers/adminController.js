const { Produto, Categoria } = require('../models');
const storage = require('../middlewares/storage');
const fs = require('fs');


const adminController = {
    getPainelAdmin: async (req, res) => {
        const produtos = await Produto.findAll();

        console.log(produtos);
        return res.render('adm/paineladmin', { produtos });
    },
    getProduto: async (req, res) => {
        const { id } = req.params
        const produtos = await Produto.findOne({ where: { id } });

        return res.render('adm/detalhes', { produtos: produtos })
    },
    addProduct: async (req, res) => {

        const categorias =  await Categoria.findAll();

        return res.render('adm/adicionarProduto' , { categorias });
    },
    storeProduct: async (req, res) => {
            const { nome, preco, desconto, estoque, categoria, ativo, descricao } = req.body;

            await Produto.create({
                nome,
                preco: parseFloat(preco),
                desconto,
                estoque,
                categorias_id: categoria,
                ativo,
                descricao,
                imagem: req.file.filename

        })

        return res.redirect('/adm/paineladmin');

    },

    editProduct: async (req, res) => {
        const { id } = req.params;
        const produto = await Produto.findOne({where: {id}});
        return res.render('adm/editarProduto', { produto });
    },

    updateProduct: (req, res) => {
        const { id } = req.params;
        const { nome, imagem, preco, desconto, estoque, categoria, ativo, descricao } = req.body;
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

    deleteProduct: async (req, res) => {
        const { id } = req.params;
        const produtos = await Produto.findOne({where: {id}});
        return res.render('adm/deletarProduto', { produtos: produtos });
    },

    destroyProduct: async (req, res) => {
        const { id } = req.params;
        await Produto.destroy({where: {id}});
        try {
            fs.unlinkSync('./public' + produto.imagem)
        } catch (err) {
            console.error(err)
        }
        return res.redirect('/adm/paineladmin');
    }
}

module.exports = adminController;