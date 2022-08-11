const {Usuario} = require("../models")
const bcrypt = require('bcrypt');


const UserController = {
    
  showLogin: (req, res) => {
    return res.render('home/login');
  },
  
  /*   mostraLogin: (req, res) => {
      res.render('home/login');
    }, */

    showCadastrar: (req, res) => {
      res.render('home/cadastro');
    },

  store: (req, res) => {
      const { nome, email, senha, confirmaSenha, cpf, cep } = req.body;
      const hash = bcrypt.hashSync(senha, 10);
      const verificaSeCadastrado = Usuario.findOne(email);

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

        return res.json(usuario)
      //return res.redirect('/login');
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
      });

      return res.redirect('/');
    },

    logado: (req, res) => {
      const { usuario } = req.session;
      return res.render('/usuario',  { usuario});

  },
    
    panelUser: (req, res) => { 
      const { usuario } = req.session;
      return res.render('usuario/painelUsuario', { usuario});
  },
  
  esqueciMinhaSenha: (req, res) => {
      res.render('usuario/esqueciMinhaSenha')
    }

  }

module.exports = UserController;