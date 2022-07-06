const Usuario = require('../models/usuariosModel');
const bcrypt = require('bcrypt');


const UserController = {
    
    index: (req, res) => {
        const usuarioLogado = ProdutoModel.findAll();
    return res.render('home/index');
  },
  
    mostraLogin: (req, res) => {
      res.render('home/login');
    },

    mostraCadastrar: (req, res) => {
      res.render('home/cadastro');
    },

    store: (req, res) => {
      const { nome, email, senha, confirmaSenha, cpf, cep } = req.body;
      const hash = bcrypt.hashSync(senha, 10);
      const verificaSeCadastrado = Usuario.findOne(email)

      if (verificaSeCadastrado) {
        return res.render('home/cadastro', { error: 'Usuário já cadastrado' });
      }

      if (senha != confirmaSenha) {
        return res.render('home/cadastro', { error: 'Senhas não conferem.' });
      }

      const usuario = {
        nome,
        email,
        senha: hash,
        cpf,
        cep
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
      res.render('usuario',  { usuario: req.session.usuario });

    },
    esqueciMinhaSenha: (req, res) => {
      res.render('usuario/esqueciMinhaSenha')
    }

  }

module.exports = UserController;