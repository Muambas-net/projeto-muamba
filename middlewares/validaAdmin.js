const validaAdmin = (req, res, next) => {
    const { usuario } = req.session;
    if (usuario.nivelId == "admin") {
       return next();
    }

    return res.redirect('/');
}

module.exports = validaAdmin;