const express = require('express');
const { getProducts,searchProducts, getData } = require('../controlers/products');
const router = express.Router();
const {userAuthintication}  = require('../middleware/userAuth')

router.get('/products',getProducts)
router.get('/searchProducts/:key',userAuthintication,searchProducts)
router.get('/product/:id',userAuthintication,getData)

module.exports = router