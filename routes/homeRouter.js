const express = require("express");
const router = express.Router();
const homeController = require('../controllers/homeController');


router.get('/', homeController.index);
router.get('/carrinho', homeController.carrinho);
router.get('/categorias', homeController.categorias);
router.get('/produtos', homeController.produtos);
router.get('/cadastro', homeController.cadastro);
router.get('/lista', homeController.lista);


module.exports = router;









