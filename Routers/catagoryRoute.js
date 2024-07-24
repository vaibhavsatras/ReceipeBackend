const express = require('express');
const { searchCatagory } = require('../controlers/products');
const { userAuthintication } = require('../middleware/userAuth');
const router  = express.Router();

router.get('/catageory/:catagory',searchCatagory)

module.exports = router