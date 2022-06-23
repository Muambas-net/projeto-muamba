
const adminController = {
    getPainelAdmin: (req, res) => {
        res.render('adm/painelAdmin');
    },
    addProduct: (req, res) => {
        res.render('adm/adicionarProduto');
    },
    editProduct: (req, res) => {
        res.render('adm/editarProduto');
    },
    deleteProduct: (req, res) => {
        res.render('adm/deletarProduto');
    }
}

module.exports = adminController;