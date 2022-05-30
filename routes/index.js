var express = require('express');
var router = express.Router();

const menuRouter = require('./menuRoutes')



/* GET home page. */
router.use('/menu',menuRouter)

module.exports = router;
