const Produto = require('../database/models/Produto');

const homeController = {

    showIndex: (req, res) => {
        const produtos = Produto.findAll();
        let { usuario, carrinho } = req.session;
        /* Possivel ajuste para contator de itens do carrinho */
        if (usuario) {
            if (carrinho > 0) {
                return res.render('home/index', { produtos, usuario, carrinho });
            }
            return res.render('home/index', { produtos, usuario, carrinho });
        }
        return res.render('home/index', { produtos, usuario, carrinho });
    },

    showOneProduct: (req, res) => {
        let { usuario, carrinho } = req.session;
        const { id } = req.params;

        const produto = Produto.findById(id);
        if (!produto) {
            return res.render("home/not-found", { error: "Produto não encontrado 😬" });
        }
        if (usuario) {
            if (carrinho > 0) {
                return res.render('home/produtos', { produto, usuario, carrinho });
            }
            return res.render('home/produtos', { produto, usuario, carrinho });
        }
        return res.render("home/produtos", { produto, usuario });

    },

    categorias: (req, res) => {
        const { usuario } = req.session;
        res.render('home/categorias', { usuario });
    },

    login: (req, res) => {
        res.render('home/login')
    },

    produtos: (req, res) => {
        const { usuario } = req.session;

        res.render('home/produtos', { usuario });
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