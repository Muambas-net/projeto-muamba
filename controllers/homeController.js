

const homeController = {
    index: (req, res) => {
        res.render('home/index');
    },
    carrinho: (req, res) => {
        res.render('home/carrinho');
    },
    categorias: (req, res) => {
        res.render('home/categorias');
    },
    login: (req, res) => {
        res.render('home/login')
    },
    produtos: (req, res) => {
        res.render('home/produtos')
    },
    cadastro: (req, res) => {
        res.render('home/cadastro')
    },
    lista: (req,res) =>{
        res.render('home/lista')
    }

}

module.exports = homeController