const contCarrinho = (req, res, next) => {
    let { carrinho } = req.session;
    let total = 0;

    if (!carrinho) {
        return res.render("home/index", { carrinho: [], total })
    }

    carrinho.forEach(produto => {
        total += parseFloat(produto.preco);
    });
    res.render('home/index', { carrinho, total });

    return next();
}

module.exports = contCarrinho