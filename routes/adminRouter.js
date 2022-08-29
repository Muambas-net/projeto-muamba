const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const validaLogin = require("../middlewares/validaLogin");
const validaAdmin = require("../middlewares/validaAdmin");
const resCart = require("../middlewares/resCart");
const  storage = require("../middlewares/storage");
const upload = storage("imagem", "/produtos");


router.use(validaLogin);
router.use(validaAdmin);
router.use(resCart);
router.get("/adm/paineladmin", adminController.getPainelAdmin);
router.get("/adm/adicionar-produto", adminController.addProduct);
router.get("/adm/produto/detalhes/:id", adminController.getProduto)
router.post("/adm/adicionar-produto", upload, adminController.storeProduct);
router.get("/adm/:id/editar-produto", adminController.editProduct);
router.put("/adm/editar-produto/:id", adminController.updateProduct);
router.get("/adm/deletar-produto/:id", adminController.deleteProduct);
router.delete("/adm/deletar-produto/:id", adminController.destroyProduct);

module.exports = router;