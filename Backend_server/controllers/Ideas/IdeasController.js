const express = ("express")
const mysql = require('mysql')
const uuid = require('uuid')
const validator = require('email-validator')
const session = require('sessionstorage')
const model = require('../../models/database')

//  for global ideas
// if he is admin show all records
// and if he is user so show him ideas regarding his industry
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
    if(session.getItem('signin')==true){
        // var userinfo = session.getItem('useridinfo');
        // req.body.ideaName,req.body.ideaDescription,req.body.image
        let sql3="update idea set title=?, description=?, image=? where ideaid=?";
        model.query(sql3,[req.body.ideaName,req.body.ideaDescription,req.body.image,req.body.ideaID],(err,result)=>{
            if(err){
                // console.log(user_id)
                console.log( JSON.stringify(err,undefined,2));
                // console.log("error")
            }
            else{
                console.log("the data has been updated");
            }
        });
    
    }
}
exports.globalideaupdatestatus = (req,res)=>{
    if(session.getItem('signin')==true){
        let sql = "update idea set isapproved=1 where ideaid=?";
        model.query(sql,req.body.ideaID,(err,result)=>{
            if (err) {
              // console.log(user_id)
              console.log(JSON.stringify(err, undefined, 2));
              // console.log("error")
            }
            else{
                console.log(result);
            }
        })
    }
}
exports.viewglobalidea = (req,res)=>{
    if(session.getItem('signin')==true){
        var userinfo = session.getItem("useridinfo");
        let sql = "select * from idea";
        model.query(sql,(err,result)=>{
            if (err) {
              // console.log(user_id)
              console.log(JSON.stringify(err, undefined, 2));
              // console.log("error")
            }
            else{
                console.log(result);
                res.json({"result":result});
                // if(result[0].userrole=="admin"){
                //     let sql2 = "select * from idea";
                    
                
            }
        })
    }
}
exports.addjuryresponse = (req,res)=>{
    if(session.getItem('signin')==true){
        let idea_comment={
            ideaid:req.body.ideaID,
            ideacomment:req.body.ideaComment,
            commentby:req.body.commentBY
        }
        let sql = "insert into idea_comment set ?";
        model.query(sql,idea_comment,(err,result)=>{
            if(err){
                // console.log(user_id)
                console.log( JSON.stringify(err,undefined,2));
                // console.log("error")
            }
            else{
                console.log("response added");
            }
        })
    }
}
exports.getidea = (req,res)=>{
    if(session.getItem('signin')==true){
        let sql = "select * from idea JOIN idea_comment ON idea.ideaid=idea_comment.ideaid where idea.ideaid=?";
        model.query(sql,req.body.ideaID,(err,result)=>{
            if(err){
                // console.log(user_id)
                console.log( JSON.stringify(err,undefined,2));
                // console.log("error")
            }
            else{
                console.log(result);
                res.json({"result":result});
            }
        })
    
    }
}
exports.getallitems = (req,res) =>{
    if(session.getItem('signin')==true){
        var userinfo = session.getItem('useridinfo');
        
        let sql2 = "select * from idea where userid=?";
        
        
        
        
        
        model.query(sql2,userinfo,(err,result)=>{
            if(err){
                // console.log(user_id)
                console.log( JSON.stringify(err,undefined,2));
                // console.log("error")
            }
            else{
                // model.query(sql2,userinfo,(err,result)=>{
                //     if(err){
                // // console.log(user_id)
                // console.log( JSON.stringify(err,undefined,2));
                // // console.log("error")
                //     }
                //     else{
                        
                //     }    
                // });
                console.log(result);
                return res.status(200).json({"result":result});
                // resultjuryremarks
                
                // Object.keys(result).forEach(function(key) {
                //     // var row = result[key];
                //     var ideaid = result[key].ideaid;
                //     var ideatitle=result[key].title;
                //     var ideadesc=result[key].description;
                //     var ideaimage=result[key].image;
                //     var ideavisibility=result[key].visibility;
                //     var ideaindustry=result[key].ideaindustry;
                //     var ideadomain=result[key].domain;
                //     var isapproved=result[key].isapproved;
                //    return res.status(200).json({"ideaid":ideaid,"ideatitle":ideatitle,"ideadescription":ideadesc,"ideaimage":ideaimage,"ideavisibility":ideavisibility,"ideaindustry":ideaindustry,"ideadomain":ideadomain,"isapproved":isapproved})
                //     // console.log(row.name)
                // });
            }
        })
    }
}

// const model = require('../../models/database')

// exports.getAllIdeas