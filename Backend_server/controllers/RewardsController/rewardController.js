const model = require('./../../models/database')
exports.getallrewards = async(req,res)=>{
    if(session.getItem('signin')==true){
        var userinfo = session.getItem('useridinfo');
        let sql = "select * from rewards where userid="+mysql.escape(userinfo)
        await model.query(sql,(err,result)=>{
            if(err){
                console.log( JSON.stringify(err,undefined,2));
            }
            else{
                var title = result[0].title;
                var desc = result[0].description;
                var rewardpoints = result[0].rewardpoints;
                var userpoints = result[0].userpoints;
                var status = result[0].claimstatus
                console.log(result);
                res.json({"title":title,"desc":desc,"rewardpoints":rewardpoints,"userpoints":userpoints,"status":status});
                
                
                
            }
        })
    }
    else{
        res.send("please signin first Thankyou");
    }
}
exports.uploadreward = async(req,res)=>{
    
}
exports.updatepoints = async(req,res)=>{
   if(session.getItem('signin')==true){
       var userinfo = session.getItem('useridinfo');
    //     select the points of the rewar that is being selected
       var points;
    //    let sql = "select * from rewards where userid="+mysql.escape(userinfo)
       let sql1 = "update rewards set userpoints="+mysql.escape(points);
   }
   else{
       res.send("please signin first Thankyou");
   } 
}