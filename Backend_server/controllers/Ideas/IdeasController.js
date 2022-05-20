const express = ("express")
const mysql = require('mysql')
const uuid = require('uuid')
const validator = require('email-validator')
const session = require('sessionstorage')
const model = require('../../models/database')


exports.addidea = (req,res)=>{
    if(session.getItem('signin')==true){
        var ideaid1 = uuid.v1();
        var userinfo = session.getItem('useridinfo');
        let ideadetails={
          ideaid:ideaid1,
          title : req.body.ideaTitle,
          description: req.body.ideaDescription,
          image:req.body.ideaImage,
          visibility:req.body.ideaVisibility,
          ideaindustry:req.body.ideaIndustry,
          userid:userinfo,
          domain:req.body.ideaDomain,
          isapproved:0
            
        };
        let deliverables ={
          delivery:req.body.ideaFinalDeliverables,
          ideaid:ideaid1  
        };
        let sql = "insert into idea set ?";
        let sql1 = "insert into idea_deliverables set ?";
        model.query(sql,ideadetails,(err,result)=>{
            if(err){
                // console.log(user_id)
                console.log( JSON.stringify(err,undefined,2));
                // console.log("error")
            }
            else{
                console.log(result);
                res.json(ideadetails)
            }
        });
        model.query(sql1,deliverables,(err,result)=>{
            if(err){
                // console.log(user_id)
                console.log( JSON.stringify(err,undefined,2));
                // console.log("error")
            }
            else{
                console.log(result);
                // res.JSON(ideadetails)
            }
        });
    }
    
}
exports.edititem = (req,res)=>{
    //eheyyy
}
exports.getallitems = (req,res) =>{
    if(session.getItem('signin')==true){
        var userinfo = session.getItem('useridinfo');
        let sql = "select * from idea where userid=?";
        model.query(sql,userinfo,(err,result)=>{
            if(err){
                // console.log(user_id)
                console.log( JSON.stringify(err,undefined,2));
                // console.log("error")
            }
            else{
                console.log(result)
                Object.keys(result).forEach(function(key) {
                    // var row = result[key];
                    var ideaid = result[key].ideaid;
                    var ideatitle=result[key].title;
                    var ideadesc=result[key].description;
                    var ideaimage=result[key].image;
                    var ideavisibility=result[key].visibility;
                    var ideaindustry=result[key].ideaindustry;
                    var ideadomain=result[key].domain;
                    var isapproved=result[key].isapproved;
                    res.json({"ideaid":ideaid,"ideatitle":ideatitle,"ideadescription":ideadesc,"ideaimage":ideaimage,"ideavisibility":ideavisibility,"ideaindustry":ideaindustry,"ideadomain":ideadomain,"isapproved":isapproved})
                    // console.log(row.name)
                });
            }
        })
    }
}

// const model = require('../../models/database')

// exports.getAllIdeas