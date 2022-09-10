const express = require("express");
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.showIndex);
router.post('/', homeController.showIndex);
router.get('/categorias/:id', homeController.categorias);
router.get('/produtos', homeController.produtos);
router.get('/cadastro', homeController.cadastro);
router.get('/lista', homeController.lista);
router.get('/produtos/:id', homeController.showOneProduct);


module.exports = router;









