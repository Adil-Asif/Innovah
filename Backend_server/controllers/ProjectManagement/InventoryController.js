const model = require('../../models/database')

exports.getAllInventory = (req, res) => {
    projectID = req.params.id
    let sql = "SELECT inventoryid,projectid,itemstatus,quantity,inventoryvalue,addedby,itemdescription	 FROM inventory where projectid=" + (projectID);
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
exports.addNewInventory = async (req, res) => {

    let currentID
    console.log(req.body)
    console.log("######################################################")
    let sql = `SELECT count(*) FROM inventory;`
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

            sql = `insert into fyp_database.inventory(inventoryid,projectid,itemstatus,quantity,inventoryvalue,addedby,itemdescription) values ('${currentID}','${req.body.projectid}','unutilized',${req.body.quantity},${req.body.inventoryvalue},'${req.body.addedby}','${req.body.itemdescription}');`
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