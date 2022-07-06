const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.mostraLogin);
router.post('/login', userController.login);
router.get('/cadastrar', userController.mostraCadastrar);
router.post('/cadastrar', userController.store);
router.get('/logout', userController.logout);
router.get('/esqueciMinhaSenha', userController.esqueciMinhaSenha);
router.get('/perfil', userController.logado);



module.exports = router;