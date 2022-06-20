const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/admin/painelAdmin", adminController.getPainelAdmin);

module.exports = router;