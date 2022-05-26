const model = require('../../models/database')

exports.getAllIBoards = (req, res) => {
    projectID = req.params.id
    let sql = "SELECT boardid,taskstatus,taskname,tasktype,assignedto,taskdescription FROM boards where projectid=" + (projectID);
    model.query(sql, (err, result) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2));
        }
        else {
          //  console.log(result);
            res.send(result);
        }
    });

}
exports.addNewBoard = async (req, res) => {

    let currentID
    console.log(req.body,"addnewBoard")
    let sql = `SELECT MAX( CAST(boardid AS SIGNED)) as maxkey FROM boards;`
    await model.query(sql, (err, result) => {
        try {
             console.log(result);
            if (result[0].maxkey === null) {
                currentID = 1
                console.log(currentID,"TRUE")
            } else {
                currentID = Object.values(JSON.parse(JSON.stringify(result)))
                console.log(currentID, "currentID 1 in else block")
                currentID = parseInt(Object.values(currentID[0]))
                currentID += 1
                console.log(currentID)
                console.log(currentID, "currentID 2")
            }

            sql = `insert into boards(projectid,boardid,taskstatus,taskname,tasktype,assignedto,taskdescription) values ('${req.body.projectid}','${currentID}','To Do','${req.body.taskname}','${req.body.tasktype}','${req.body.assignedto}','${req.body.taskdescription}');`
            console.log(currentID)
            model.query(sql, (err, result) => {
                try {
                console.log(result)
                    console.log(err)
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

exports.getFilteredBoard =(req,res)=>{
   
    let projectID = req.params.id
    let sql = `SELECT count(boardid ) as itemcount,taskstatus FROM boards where projectid= '${projectID}' GROUP BY taskstatus`;
    model.query(sql, (err, result) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2));
        }
        else {
            console.log(result);
            res.send(result);
        }
    });

}


exports.updateBoard=(req,res)=>{
    let taskid = req.body.taskid
    console.log("in updateboard")
    let updateStatus = req.body.updateStatus
    console.log(taskid,updateStatus,req.body)
    let sql = `UPDATE boards SET taskstatus='${updateStatus}' WHERE boardid ='${taskid}'`
    model.query(sql, (err, result) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2));
        }
        else {
            console.log(result);
            res.send({"Delete":"Sucess"});
        }
    });
}