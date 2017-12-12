var express = require('express');
var router = express.Router();
router.use('/product',require('./routesProducts.js'));
router.use('/stripe',require('./routesStripe.js'));
module.exports=router;