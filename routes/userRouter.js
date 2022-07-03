const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/login', userController.mostraLogin);
router.get('/cadastrar', userController.mostraCadastrar);
router.get('/perfil', userController.logado);
router.get('/esqueciMinhaSenha', userController.esqueciMinhaSenha);

router.post('/login', userController.login);
router.post('/cadastrar', userController.store);


module.exports = router;