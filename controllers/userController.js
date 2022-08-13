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

  store: async (req, res) => {
      const { nome, email, senha, confirmaSenha, cpf, cep } = req.body;
      const hash = bcrypt.hashSync(senha, 10);
      const verificaSeCadastrado = await Usuario.findOne({where:{email}});

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

         await Usuario.create(usuario);

        return res.redirect('/login');
    },

    login: async (req, res) => {
      const { email, senha } = req.body;
      const usuario = await Usuario.findOne({where: {email}});

      if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
        return res.render("home/login", { error: "Email ou senha estão incorretos ou não existem." });
      }

      req.session.usuario = usuario;
      return res.redirect("/");
    },

    logout: (req, res) => {
      req.session.destroy();

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