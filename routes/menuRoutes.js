var express = require('express');
var router = express.Router();

const menuController = require('../controllers/menuController')


router.get('/', menuController.getAll)
router.post('/',menuController.newMenu)


module.exports = router