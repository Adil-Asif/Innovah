const model = require('../../models/database')

exports.returnAllData = (req, res) => {
userid=req.params.userid
console.log(userid)
    let sql="select  project_details.projectid, project_details.description, project_details.projecttitles, project_details.projectstatus from  project_details inner join  idea on  project_details.ideaid =  idea.ideaid inner join  user_details on  user_details.userid =  idea.ideaid where  idea.userid="+(userid).toString();
    model.query(sql , (err,result)=>{
        if(err){
            console.log( JSON.stringify(err,undefined,2));
        }
        else{
            console.log(result);
            res.send(result);
        }
    });
}
exports.returnSpecificRecord = (req, res) => {
  
    userid=req.params.userid
    projectid = req.params.projectid
    console.log(userid)
        let sql=`select  project_details.projectid, project_details.description, project_details.projecttitles, project_details.projectstatus from  project_details inner join  idea on  project_details.ideaid =  idea.ideaid inner join  user_details on  user_details.userid =  idea.ideaid where  idea.userid=${userid} and projectid=${projectid}`;
        model.query(sql , (err,result)=>{
            if(err){
                console.log( JSON.stringify(err,undefined,2));
            }
            else{
                console.log(result);
                res.send(result);
            }
        });
}