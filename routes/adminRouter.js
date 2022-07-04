const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const validaLogin = require("../middlewares/validaLogin");
const validaAdmin = require("../middlewares/validaAdmin");

router.use(validaAdmin);
router.use(validaLogin);
router.get("/adm/paineladmin", adminController.getPainelAdmin);
router.get("/adm/adicionar-produto", adminController.addProduct);
router.post("/adm/adicionar-produto", adminController.storeProduct);
router.get("/adm/editar-produto", adminController.editProduct);
router.put("/adm/editar-produto", adminController.updateProduct);
router.get("/adm/deletar-produto", adminController.deleteProduct);
router.delete("/adm/deletar-produto", adminController.destroyProduct);

module.exports = router;