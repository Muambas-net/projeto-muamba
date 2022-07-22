const express = require('express');
const router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController');
const validaLogin = require('../middlewares/validaLogin');

router.use(validaLogin)
router.get('/carrinho', CarrinhoController.showCart);
router.post('/carrinho/adicionar', CarrinhoController.addCart);
router.delete('/carrinho/:id/remover', CarrinhoController.removeCart);
router.post('/carrinho/finalizacao', CarrinhoController.finalizarCompra);
router.get('/pedidoConcluido', CarrinhoController.pedidoConcluido);

module.exports = router;
