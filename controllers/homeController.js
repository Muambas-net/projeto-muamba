

const homeController = {
    index: (req, res) => {
        const {usuario} = req.session;
        res.render('home/index', {usuario});
    },
    carrinho: (req, res) => {
        const {usuario} = req.session;

        res.render('home/carrinho', {usuario});
    },
    categorias: (req, res) => {
        const {usuario} = req.session;

        res.render('home/categorias', {usuario});
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
    lista: (req,res) =>{
        const {usuario} = req.session;

        res.render('home/lista', {usuario});
    }

}

module.exports = homeController