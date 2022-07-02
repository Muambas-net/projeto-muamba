const Usuario = require('../models/usuariosModel');
const bcrypt = require('bcrypt');


  const UserController = {
    mostraLogin: (req, res) => {
      res.render('home/login');
    },

    mostraCadastrar: (req, res) => {
      res.render('home/cadastro');
    },

    store: (req, res) => {
      const { nome, email, senha } = req.body;
      const hash = bcrypt.hashSync(senha, 10);
      const verificaSeCadastrado = Usuario.findOne(email)

      if (verificaSeCadastrado) {
        return res.render('home/cadastro', { error: 'Usuário já cadastrado' });
      }

      const usuario = {
        nome,
        email,
        senha: hash
      }

      Usuario.create(usuario);

      return res.redirect('/login');
    },

    login: (req, res) => {
      const { email, senha } = req.body;
      const usuario = Usuario.findOne(email);

      if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
        return res.render("home/login", { error: "Email ou senha estão incorretos ou não existe." });
      }

      req.session.usuario = usuario;
      return res.redirect("/");

    },

    logout: (req, res) => {
      req.session.destroy(function (err) {
        // cannot access session here
      });

      return res.redirect('/login');
    },

    logado: (req, res) => {
      res.render('usuario/painelUsuario')

    },
    esqueciMinhaSenha: (req, res) => {
      res.render('usuario/esqueciMinhaSenha')
    }

  }

module.exports = UserController;