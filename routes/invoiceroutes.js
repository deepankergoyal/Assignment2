const express = require("express");
const invoicecontroller = require("./../controllers/invoicecontroller");
const router = express.Router();

// router.param('id', tourController.checkID);

router.route("/").get(invoicecontroller.f1).post(invoicecontroller.f2);

router.route("/:id").get(invoicecontroller.f3);
module.exports = router;
