const model = require('../../models/database')

exports.getAllIBoards = (req, res) => {
    projectID = req.params.id
    let sql = "SELECT boardid,taskstatus,taskname,tasktype,assignedto,taskdescription	 FROM boards where projectid=" + (projectID);
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
exports.addNewBoard = async (req, res) => {

    let currentID
    console.log(req.body)
    let sql = `select count(boardid)FROM fyp_database.boards`
    await model.query(sql, (err, result) => {
        try {
            console.log(result,result.length, "result");
            if (result.length ===0) {
                currentID = 1
            } else {
                currentID = Object.values(JSON.parse(JSON.stringify(result)))
                console.log(currentID, "currentID 1 in else block")
                currentID = parseInt(Object.values(currentID[0]))
                currentID += 1
                console.log(currentID)
                console.log(currentID, "currentID 2")
            }

            sql = `insert into fyp_database.boards(projectid,boardid,taskstatus,taskname,tasktype,assignedto,taskdescription) values ('${req.body.projectid}','${currentID}','todo','${req.body.taskname}','${req.body.tasktype}','${req.body.assignedto}','${req.body.taskdescription}');`
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