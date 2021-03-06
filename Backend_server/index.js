//NOTE: always use comments as it helps understands code better
//break down big functionality into small portions and then implement
//Follow one convention in coding all variablesname should be camel case
//In All Functions Try Catch must be used to check for the errors
// All of the URIs must be in snake case
// for unique assignment of IDs use either Time function of GUID/UUID
// The credintials for database and other sensitive information regarding to server should be stored
// in .env file
//////////////////////////##################################//////////////////////////////////

// changes in DB //

//added new field for domain and final deliverables in ideas table
// changed the name of requesttype to request_description in posting_request
// changes request foreign key constraint from idea to userid because now request
// can be of any type and not restrcited to any  specific idea along with it dropped idea title

// created table submission details
// with attributes: submittion id : unique identifier of id
//                  submitted by : ID of member whi had applied for the job
//                  request id : to which request they had submitted the

const express = require("express");
const databaseConnections = require("./models/database");

const fileupload = require("express-fileupload");
// const cors=require('cors');
const bodyParser = require("body-parser");
const loginSignupRoutes = require("./routes/Login/SignIn&Signout.js");
const boardRoutes = require("./routes/ProjectManagement/Boards.js");
const projectManagement = require("./routes/ProjectManagement/GeneralProjectManagement.js");
const inventoryRoutes = require("./routes/ProjectManagement/Inventory");
const rewardroutes = require("./routes/Rewards/reward");
const requestRoutes = require("./routes/Requests/requests");
const profile = require("./routes/Profile/Profile");
const ideas = require("./routes/Ideas/Ideas");

const competitions = require("./routes/Competitions/Competitions")
var cors = require("cors");

const LearnRoutes = require("./routes/LearningResources/Learn.js");
require("dotenv").config();
var jsonParser = bodyParser.json();
const app = express();

app.use(cors());

app.use(jsonParser, bodyParser.urlencoded({ extended: false }));
app.use(fileupload());
const port = process.env.PORT || 8000;
console.log(process.env.USER);

databaseConnections.connect((err)=>{
    if(err){
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));

    }
    else{
        console.log("mysql connected");
    }
});

// this file will be used for basic routing which means high level routes like
//if we have Login pages all routes of Login will be like "/Login/Something/Something" so base route
// which is of /Login will be defined here and then we will be going Login file in routes
//for further implementation
app.use("/Login", loginSignupRoutes);
app.use("/generalproject", projectManagement);
app.use("/projectboards", boardRoutes);
app.use("/projectinventory", inventoryRoutes);
app.use("/Learn", LearnRoutes);
app.use("/Rewards", rewardroutes);
app.use("/requests", requestRoutes);
app.use("/profile", profile);
app.use("/ideas", ideas);
app.use("/competitions",competitions)
app.listen(port, () => {
  console.log("Backend is up and running on port 5000");
});

// mysql://bde136a0d9d8b4:7e173083@us-cdbr-east-05.cleardb.net/heroku_b4eea295947d0b5?reconnect=true
