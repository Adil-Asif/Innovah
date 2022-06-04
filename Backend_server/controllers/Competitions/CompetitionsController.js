const model = require('./../../models/database')

exports.submittingAnswer = (req, res) => {
    console.log(req.body)
    let currentID
    let sql = `SELECT MAX(CAST(submissionID  AS SIGNED)) as maxkey FROM competition;`


    model.query(sql, (err, result) => {
        try {
            if (result[0].maxkey === null) {
                console.log(currentID, "currentID 2")
                console.log(result[0].maxkey)
                currentID = 1
                console.log(currentID, "currentID 2")
            } else {
                currentID = parseInt(result[0].maxkey)
                currentID += 1
                console.log(currentID, "currentID 2")
            }
    console.log(currentID)
            sql = `insert into competition(submissionID ,competitionname ,description ,userid) values ('${currentID}','${req.body.competiton}','${req.body.answer}','${req.body.userid}');`
           
            model.query(sql, (err, result) => {
                try {
                    console.log(result,"1",err)
                    res.send({ "DataEntry": true })
    
                } catch (error) {
                    console.log(error)
                    res.send({ "DataEntry": false })
    
    
                }
    
    
            });
    
        } catch (error) {
            console.log(error)
    
            res.send({ "DataEntry": false })
        }
    
    
    });
    
    



}

exports.gettingAllSubmissions = (req,res)=>{
    let competitionsName = req.params.competitions
console.log(competitionsName)

let sql = `select  submissionID ,competitionname ,description, userid from  competition where competitionname= '${competitionsName}'`;
model.query(sql, (err, result) => {
    if (err) {
        console.log(JSON.stringify(err, undefined, 2)); //
    }
    else {
        console.log(result);
        res.send(result);
    }
});
}

exports.addingPoints =(req,res)=>{
    let points = 0 ;
    let currentpoints=0 ;
    if(req.body.compName==='idea_hack'){
        points=2000
    } else if(req.body.compName==='innovah_cup'){
        points=1000
    }else if(req.body.compName==='proposal_defence'){
        points=3500
    }
    console.log(req.body)
    
    let sql = `select  innovahPoints from  user_details where userid = '${req.body.userid}'`;
    model.query(sql, (err, result) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2)); //
        }
        else {
          //  console.log(result[0].innovahPoints,"is NAN here");
           currentpoints = result[0].innovahPoints;
           console.log(currentpoints,"from query")
        }
    });
    console.log(points,"points to add", currentpoints,"current points of user")
    
    setTimeout(()=>{updateTable('user_details',req.body.userid,points+currentpoints)},1000)

deletePreviousSubmissions('competition',req.body.compName)

res.send({"addition":true})
}

const updateTable = (tablename,recordId,value)=>{
    console.log(value)
 let   sql = `UPDATE ${tablename} SET innovahPoints=${value} WHERE userid= '${recordId}'`;
    model.query(sql, (err, result) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2)); //
        }
        else {
            console.log("update Sucessfull");
          
        }
    });

}
const deletePreviousSubmissions = (tablename,value)=>{
    sql = `DELETE FROM ${tablename} where competitionname = '${value}'` ;
    model.query(sql, (err, result) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2)); //
        }
        else {
           
            console.log("deletion sucessfull")
         

           
        }
    });

}
