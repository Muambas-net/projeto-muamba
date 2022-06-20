const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/perfil', userController.logado);


module.exports = router;