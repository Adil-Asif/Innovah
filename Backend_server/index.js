//NOTE: always use comments as it helps understands code better
//break down big functionality into small portions and then implement
//Follow one convention in coding all variablesname should be camel case
//In All Functions Try Catch must be used to check for the errors
// All of the URIs must be in snake case
// for unique assignment of IDs use either Time function of GUID/UUID
// The credintials for database and other sensitive information regarding to server should be stored
// in .env file
const express = require('express')
const databaseConnections = require('./models/database')

const fileupload = require('express-fileupload')
// const cors=require('cors');
const bodyParser = require("body-parser")
const loginSignupRoutes = require('./routes/Login/SignIn&Signout.js')
const boardRoutes = require('./routes/ProjectManagement/Boards.js')
const projectManagement = require('./routes/ProjectManagement/GeneralProjectManagement.js')
const inventoryRoutes = require('./routes/ProjectManagement/Inventory')

const requestRoutes = require('./routes/Requests/requests')
var cors = require('cors')


const LearnRoutes = require("./routes/LearningResources/Learn.js")
require('dotenv').config()
var jsonParser = bodyParser.json()
const app = express()

app.use(cors());

app.use(jsonParser, bodyParser.urlencoded({ extended: false }))
app.use(fileupload())
const port = process.env.PORT
console.log(process.env.USER)

// databaseConnections.connect((err)=>{
//     if(err){
//         console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        

//     }
//     else{
//         console.log("mysql connected");    
//     }
// });

// this file will be used for basic routing which means high level routes like 
//if we have Login pages all routes of Login will be like "/Login/Something/Something" so base route
// which is of /Login will be defined here and then we will be going Login file in routes 
//for further implementation 
app.use('/Login', loginSignupRoutes)
app.use('/generalproject',projectManagement)
app.use('/projectboards',boardRoutes)
app.use('/projectinventory',inventoryRoutes)
app.use('/Learn',LearnRoutes)

app.use('/requests',requestRoutes)



app.listen(port, () => {
    console.log("Backend is up and running on port 5000")
})