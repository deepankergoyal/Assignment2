const express = require("express");
const manufacturercontroller = require("./../controllers/manufacturerController");
const router = express.Router();

// router.param('id', tourController.checkID);

router
  .route("/")
  .get(manufacturercontroller.f1)
  .post(manufacturercontroller.f2);

module.exports = router;
