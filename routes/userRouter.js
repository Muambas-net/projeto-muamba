const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/login', userController.showLogin); 
router.post('/login', userController.login); 
router.get('/cadastrar', userController.showCadastrar);
router.post('/cadastrar', userController.store); 
router.get('/esqueciMinhaSenha', userController.esqueciMinhaSenha);
router.get('/logout', userController.logout);
router.get('/usuario', userController.panelUser);
router.get('/detalhesPedido/:id', userController.orderDetail);


module.exports = router;