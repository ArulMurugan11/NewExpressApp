var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController.js");
const { authCheck } = require('../middleware/auth');

/* GET users listing. */
router.post('/create-user', authCheck, userController.createUser);
router.get('/get-user', authCheck, userController.getUser);

module.exports = router;
