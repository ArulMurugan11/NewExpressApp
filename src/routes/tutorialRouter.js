var express = require('express');
var router = express.Router();
const tutorialController = require("../controllers/tutorialController.js");
const { authCheck } = require('../middleware/auth.js');


router.post("/", authCheck, tutorialController.create);
router.get("/", authCheck, tutorialController.findAll);
router.get("/published", authCheck, tutorialController.findAllPublished);
router.get("/:id", authCheck, tutorialController.findOne);
router.put("/:id", authCheck, tutorialController.update);
router.delete("/:id", authCheck, tutorialController.delete);
router.delete("/", authCheck, tutorialController.deleteAll);


module.exports = router;