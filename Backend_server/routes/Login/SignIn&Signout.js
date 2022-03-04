//In here we will be further defining all of the routes which will be like /Login/ or login/signup or 
//login/something and its functionality will be called from controllers file
const express = require('express')

const loginSignupController = require('../../controllers/Login/SignIn&SignoutController.js')
const router = express.Router()

router.post('/signup', loginSignupController.enterdata)

router.post('/signin',loginSignupController.CheckCredentials)

module.exports=router