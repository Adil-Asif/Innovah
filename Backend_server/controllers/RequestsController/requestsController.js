const model = require('./../../models/database')

exports.addNewRequest= async(req,res)=>{
    let currentID
    console.log(req.body)
    console.log("######################################################")
    let sql = `SELECT count(*) FROM posting_request;`
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

            sql = `insert into posting_request(requestid, ideatitle, requesttitle, requesttype, ideaid,image) values ('${currentID}','${req.body.ideaTitle}','${req.body.requesttitle}','Help Wanted','1','${req.body.requestDescription}');`
            console.log(currentID)
            model.query(sql, (err, result) => {
                try {
                console.log(result)
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