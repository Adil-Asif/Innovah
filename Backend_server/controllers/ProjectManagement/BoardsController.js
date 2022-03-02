const model = require('../../models/database')

exports.getAllIBoards= (req,res)=>{
    projectID=req.params.id
    let sql="SELECT boardid,taskstatus,taskname,tasktype,assignedto,taskdescription	 FROM boards where projectid="+(projectID);
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
exports.addNewBoard=async(req,res)=>{
    
  let currentID
    let sql=`select count(projectid) from fyp_database.boards where projectid ='${req.body.projectid}' group by projectid`
   await model.query(sql , (err,result)=>{
        try {
            console.log(result);
           
            currentID= Object.values(JSON.parse(JSON.stringify(result)))
            console.log(currentID)
            currentID = parseInt(Object.values(currentID[0]))
            currentID +=1
            console.log(currentID)
             sql=`insert into fyp_database.boards(projectid,boardid,taskstatus,taskname,tasktype,assignedto,taskdescription) values ('${req.body.projectid}','${currentID}','todo','${req.body.taskname}','${req.body.tasktype}','${req.body.assignedto}','${req.body.taskdescription}');`
            console.log(currentID)
            model.query(sql , (err,result)=>{
                try {
                    res.send({"DataEntry":true})
                } catch (error) {
                    res.send({"DataEntry":false})
                }
               
            
            });
        
        } catch (error) {
            res.send({"DataEntry":false})
        }
      
    
    });

   
}