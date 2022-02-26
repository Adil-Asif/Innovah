const express = ("express")
// this is the file where our logic will be implemented and all functionalities will be defined here
// always do type checking for variables to mainatain integrity of code
exports.CheckCredentials = (req, res) => {
    if(req.body.username == username && req.body.password == password){
        // The credentials have been checked and the author is valid
        res.send("The user is eligible")
        
    }
    
    res.send("the data is sent from Login")
}

