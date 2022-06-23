const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/adm/paineladmin", adminController.getPainelAdmin);
router.get("/adm/adicionar-produto", adminController.addProduct);
router.get("/adm/editar-produto", adminController.editProduct);
router.get("/adm/deletar-produto", adminController.deleteProduct);

module.exports = router;