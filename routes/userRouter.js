const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const validaLogin = require("../middlewares/validaLogin");

//router.use(validaLogin);
router.get('/login', userController.mostraLogin); 
router.post('/login', userController.login); 
router.get('/cadastrar', userController.mostraCadastrar);
router.post('/cadastrar', userController.store); 
router.get('/esqueciMinhaSenha', userController.esqueciMinhaSenha);
router.get('/logout', userController.logout);
router.get('/usuario/',validaLogin, userController.logado);




module.exports = router;