const validaAdmin = (req, res, next) => {
    const { usuario } = req.session;
    if (usuario.is_admin == 1) {
       return next();
    }

    return res.redirect('/');
}

module.exports = validaAdmin;