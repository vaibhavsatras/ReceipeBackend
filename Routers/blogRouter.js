const express = require('express');
const getBlogs = require('../controlers/blogs');
const { userAuthintication } = require('../middleware/userAuth');
const router = express.Router();

router.get('/blogs',userAuthintication,getBlogs)

module.exports = router