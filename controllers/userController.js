const userController = {
  logado: (req, res) => {
      res.render('usuario/painelUsuario')
    
  },
  esqueciMinhaSenha: (req, res) => {
    res.render('usuario/esqueciMinhaSenha')
  }
}

module.exports = userController;