const express = require("express");
const datacontroller = require("./../controllers/datacontroller");
const router = express.Router();

router.route("/").get(datacontroller.f1);
module.exports = router;
