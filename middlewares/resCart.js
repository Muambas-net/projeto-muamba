const resCart = (req, res, next) => {
    let { carrinho } = req.session;

    if (carrinho > 0) {
        res.locals.carrinho = carrinho;
    } else {
        res.locals.carrinho = carrinho
    }
    next();

}

module.exports = resCart