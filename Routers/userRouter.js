const express = require('express');
const { userSignUp, userSignIn, userForgotPassword } = require('../controlers/users');
const router = express.Router();

router.post('/signUp',userSignUp)
router.post('/signIn',userSignIn)
router.post('/forgotPassword',userForgotPassword)

module.exports = router