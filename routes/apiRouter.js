const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/headsets', apiController.getAllHeadset);
router.get('/teclados', apiController.getAllTeclados);
router.get('/notebooks', apiController.getAllNotebooks);
router.get('/telefones', apiController.getAllTelefone);
router.get('/videoGames', apiController.getAllVideoGames);
router.get('/products', apiController.getProducts);

module.exports = router;
