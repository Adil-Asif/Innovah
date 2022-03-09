//NOTE: always use comments as it helps understands code better
//break down big functionality into small portions and then implement
//Follow one convention in coding all variablesname should be camel case
//In All Functions Try Catch must be used to check for the errors
// All of the URIs must be in snake case
// for unique assignment of IDs use either Time function of GUID/UUID
// The credintials for database and other sensitive information regarding to server should be stored
// in .env file
const express = require('express')
const fileupload = require('express-fileupload')
const cors=require('cors');
const bodyParser = require("body-parser")
const LoginSignupRoutes = require('./routes/Login/SignIn&Signout.js')
const LearnRoutes = require("./routes/LearningResources/Learn.js")
require('dotenv').config()
var jsonParser = bodyParser.json()
const app = express()
app.use(cors());
app.use(jsonParser, bodyParser.urlencoded({ extended: false }))
app.use(fileupload())
const port = process.env.PORT

// this file will be used for basic routing which means high level routes like 
//if we have Login pages all routes of Login will be like "/Login/Something/Something" so base route
// which is of /Login will be defined here and then we will be going Login file in routes 
//for further implementation 
app.use('/Login', LoginSignupRoutes)
app.use('/Learn',LearnRoutes)


app.listen(port, () => {
    console.log("Backend is up and running on port 5000")
})