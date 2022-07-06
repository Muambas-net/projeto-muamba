const produtosModel = require('../models/produtosModel');

const homeController = {

    showIndex: (req, res) => {
        const produtos = produtosModel.findAll();

        if (req.session.usuario) {
            return res.render('home/index', { produtos, usuario: req.session.usuario });
        }
        return res.render('home/index', { produtos });
    },

    showOneProduct: (req, res) => {
        let { usuario } = req.session;
        const { id } = req.params;

        const produto = produtosModel.findById(id);
        if (!produto) {
            return res.render("home/not-found", { error: "Produto não encontrado 😬" });
        }
        return res.render("home/produtos", { produto, usuario });

    },
    carrinho: (req, res) => {
        if (req.session.usuario) {
            return res.render('home/index', { produto, usuario: req.session.usuario });
        }
        return res.render('/carrinho', { produto });
        },

    categorias: (req, res) => {
        const { usuario } = req.session;
        res.render('home/categorias', { usuario });
    },
    
    login: (req, res) => {
        res.render('home/login')
    },

    produtos: (req, res) => {
        const {usuario} = req.session;

        res.render('home/produtos', {usuario});
    },

    cadastro: (req, res) => {
        res.render('home/cadastro')
    },

    lista: (req, res) => {
        const { usuario } = req.session;
    res.render('home/lista', { usuario });
                                }

    }

module.exports = homeController;