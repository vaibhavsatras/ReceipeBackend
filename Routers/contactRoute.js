const express = require('express');
const { addContact } = require('../controlers/contacts');
const router = express.Router();

const {userAuthintication}  = require('../middleware/userAuth')

router.post('/addContact',userAuthintication,addContact)

module.exports = router