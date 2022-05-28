const model = require('../../models/database')

exports.returnAllData = (req, res) => {
    userid = req.params.userid
    console.log(userid)
    let sql = "select  projectid,project_details.ideaid ,project_details.description, projecttitles,projectimage from  project_details inner join  idea on  project_details.ideaid =  idea.ideaid where userid= '" + (userid).toString() + "'";
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
exports.returnSpecificRecord = (req, res) => {
    let totalresponse = {}
    userid = req.params.userid
    projectid = req.params.projectid
    console.log(userid)
    let sql = `select projectid,project_details.description,projecttitles from  project_details inner join  idea on  project_details.ideaid =  idea.ideaid where  idea.userid='${userid}' and projectid='${projectid}'`;
    model.query(sql, (err, result) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2));
        }

        else {
            console.log(result)
            totalresponse = result
            //   console.log(result);
            // res.send(result);
        }
    });
    if (totalresponse != {}) {
        let todotask, inventoryMan
        let onlykeys
        let selectingOnlyTodoAndCompleted = []
        let selectingOnlyUtilizedAndUn = []
        sql = `select taskstatus,count(boardid)FROM boards where projectid=${projectid} and (taskstatus='To Do' or taskstatus='Completed') group by taskstatus;`;
        model.query(sql, (err, tasktodo) => {
            if (err) {
                console.log(JSON.stringify(err, undefined, 2));
            }
            else {

                totalresponse = Object.values(JSON.parse(JSON.stringify(totalresponse)))
                todotask = Object.values(JSON.parse(JSON.stringify(tasktodo)))
                //    console.log(todotask, "todotask 1 in else block")
                onlykeys = tasktodo.map((tasks, index) => (
                    Object.values(tasks)
                ))
                //    console.log(onlykeys, "Only keys")
                //    console.log(onlykeys.indexOf('todo'))
                onlykeys.forEach(elements => {
                    if ((elements.indexOf('To Do') != -1) || (elements.indexOf('Completed') != -1)) {
                        selectingOnlyTodoAndCompleted.push(elements)
                    }

                });
                //  console.log(selectingOnlyTodoAndCompleted.includes('Completed'), "only selecting todo and completed")
                //      console.log(checkIfelementExists(selectingOnlyTodoAndCompleted, 'Completed'), "checking function")
                console.log(selectingOnlyTodoAndCompleted)
                totalresponse[0].todotask = retunNumberOfRequiredTasks(selectingOnlyTodoAndCompleted, 'To Do')
                totalresponse[0].completed = retunNumberOfRequiredTasks(selectingOnlyTodoAndCompleted, 'Completed')

                console.log(totalresponse);
                //res.send(totalresponse);

            }
        });

        sql = `select itemstatus, count(inventoryid)FROM inventory where projectid=${projectid} and( itemstatus='Added' OR itemstatus='Utilised') group by itemstatus;`;
        model.query(sql, (err, inventoryMan) => {
            if (err) {
                console.log(JSON.stringify(err, undefined, 2));
            }
            else {
                totalresponse = Object.values(JSON.parse(JSON.stringify(totalresponse)))
                inventoryMan = Object.values(JSON.parse(JSON.stringify(inventoryMan)))
                console.log(inventoryMan, "unutilized 1 in else block ##########")
                onlykeys = inventoryMan.map((tasks, index) => (
                    Object.values(tasks)
                ))
                console.log(onlykeys, "Only keys")
                //      console.log(onlykeys.indexOf('Added'))
                onlykeys.forEach(elements => {
                    if ((elements.indexOf('Added') != -1) || (elements.indexOf('Utilised') != -1)) {
                        selectingOnlyUtilizedAndUn.push(elements)
                    }

                });
                //   console.log(selectingOnlyUtilizedAndUn.includes('Utilised'), "only selecting todo and completed")
                // console.log(checkIfelementExists(selectingOnlyUtilizedAndUn, 'Utilised'), "checking function")
                //    console.log(selectingOnlyUtilizedAndUn)
                totalresponse[0].unutilized = retunNumberOfRequiredItems(selectingOnlyUtilizedAndUn, 'Added')
                totalresponse[0].utilized = retunNumberOfRequiredItems(selectingOnlyUtilizedAndUn, 'Utilised')

                console.log(totalresponse);
                res.send(totalresponse);
            }
        });
    } else {
        res.send(totalresponse)
    }

}

const retunNumberOfRequiredTasks = (arrayfield, whatToDo) => {

    if (whatToDo === "To Do") {
        if (checkIfelementExists(arrayfield, whatToDo)) {
            //  console.log(whatToDo,'ifif')
            return 0
        } else {
            //  console.log(arrayfield[0][1])
            return arrayfield[0][1]
        }
    }
    else if (whatToDo === "Completed") {
        if (checkIfelementExists(arrayfield, whatToDo)) {
            console.log(whatToDo, "elseifif")
            return 0
        } else {
            if (arrayfield.length === 1) {
                console.log(arrayfield.length)
                //    console.log(arrayfield[1][1])
                return arrayfield[0][1]
            }
            else {
                return arrayfield[1][1]

            }
        }

    }
}


const retunNumberOfRequiredItems = (arrayfield, whatToDo) => {

    if (whatToDo === "Added") {
        if (checkIfelementExists(arrayfield, whatToDo)) {
            console.log(whatToDo, 'ifif')
            return 0
        } else {
            console.log(arrayfield[0][1])
            return arrayfield[0][1]
        }
    }
    else if (whatToDo === "Utilised") {
        if (checkIfelementExists(arrayfield, whatToDo)) {
            console.log(whatToDo, "elseifif")
            return 0
        } else {
            if (arrayfield.length === 1) {
                console.log(arrayfield.length)
                //    console.log(arrayfield[1][1])
                return arrayfield[0][1]
            }
            else {
                return arrayfield[1][1]

            }
        }
    }
}


const checkIfelementExists = (twodimarray, tofind) => {
    if (twodimarray.length == 0) {
        console.log("false")
        return true
    }
    for (let i = 0; i < twodimarray.length; i++) {
        if (twodimarray[i].includes(tofind)) {
            console.log("true", tofind)
            return false
        }
    }
    return true
}

exports.getAllIdeasData = (req, res) => {
    const userid = req.params.userid
    console.log(userid)
    try {
        let sql = `SELECT ideaid,title FROM idea where userid='${userid}'`;
        console.log("Test")
        model.query(sql, (err, result) => {
            if (err) {
                console.log("###########");
                console.log(JSON.stringify(err, undefined, 2)); //
            }
            else {
                console.log("###########");
                console.log(result);
                res.send(result);
            }
        });
    } catch (error) {
        console.log(err)
    }
}



exports.getAllPeople = (req, res) => {
    try {
        let sql = `SELECT userid,email,fullname FROM user_details`;
        console.log("Test")
        model.query(sql, (err, result) => {
            if (err) {
                console.log("###########");
                console.log(JSON.stringify(err, undefined, 2)); //
            }
            else {
                console.log("###########");
                console.log(result);
                res.send(result);
            }
        });


    } catch (error) {
        console.log(err)
    }

}
exports.savingProjectInfo = (req, res) => {
    console.log(req.body)

    let sql = `SELECT MAX(CAST(projectid AS SIGNED)) FROM project_details;`
    model.query(sql, (err, result) => {
        try {
            console.log(result, "result");
            if (Object.keys(result)[0] === null) {
                currentID = 1
            } else {
                currentID = Object.values(JSON.parse(JSON.stringify(result)))
                console.log(currentID, "currentID 1 in else block")
                currentID = parseInt(Object.values(currentID[0]))
                currentID += 1
                console.log(currentID)
                console.log(currentID, "currentID 2")
            }

            insetionFunction(currentID, req)
            InsetingTeams(currentID, req)
            res.send({ "DataEntry": true })


        } catch (error) {
            console.log(error)

            //   res.send({ "DataEntry": false })
        }


    });


}

const insetionFunction = (currentID, req) => {
    let sql2 = `insert into project_details(projectid,projecttitles,description,projectimage,ideaid) values ('${currentID}','${req.body.projectTitle}','${req.body.projectDescription}','${req.body.projectImage}','${req.body.Idea}');`
    console.log(currentID, "is current ID prinintg")
    model.query(sql2, (err, result2) => {
        try {
            console.log(result2, "result2 Insertion ")
            //    res.send({ "DataEntry": true })

        } catch (error) {
            console.log(err)
            //    res.send({ "DataEntry": false })


        }



    });
}

const InsetingTeams = (currentID, req) => {
    let teamMembers = req.body.TeamMembers
    for (let i = 0; i < teamMembers.length; i++) {
        sql = `insert into project_members(projectid ,memberid) values ('${currentID}','${teamMembers[i]}');`
        model.query(sql, (err, result3) => {
            try {
                console.log(result3, "Team members")
                //   res.send({ "DataEntry": true })
                return

            } catch (error) {
                console.log(err)
                //   res.send({ "DataEntry": false })


            }



        });
    }
}