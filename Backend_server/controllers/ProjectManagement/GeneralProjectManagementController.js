const model = require('../../models/database')

exports.returnAllData = (req, res) => {
    userid = req.params.userid
    console.log(userid)
    let sql = "select  projectid, project_details.description, projecttitles, projectstatus from  project_details inner join  idea on  project_details.ideaid =  idea.ideaid where userid= '" + (userid).toString()+"'";
    model.query(sql, (err, result) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2)); //
        }
        else {
            // console.log(result);
            res.send(result);
        }
    });
}
exports.returnSpecificRecord = (req, res) => {
    let totalresponse = {}
    userid = req.params.userid
    projectid = req.params.projectid
    console.log(userid)
    let sql = `select projectid,project_details.description,projecttitles,projectstatus from  project_details inner join  idea on  project_details.ideaid =  idea.ideaid where  idea.userid='${userid}' and projectid='${projectid}'`;
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
    if(totalresponse!={}){
    let todotask,inventoryMan
    let onlykeys
    let selectingOnlyTodoAndCompleted = []
    let selectingOnlyUtilizedAndUn=[]
    sql = `select taskstatus,count(boardid)FROM boards where projectid=${projectid} and (taskstatus='todo' or taskstatus='completed') group by taskstatus;`;
    model.query(sql, (err, tasktodo) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2));
        }
        else {
           
            totalresponse = Object.values(JSON.parse(JSON.stringify(totalresponse)))
            todotask = Object.values(JSON.parse(JSON.stringify(tasktodo)))
            console.log(todotask, "todotask 1 in else block")
            onlykeys = tasktodo.map((tasks, index) => (
                Object.values(tasks)
            ))
            console.log(onlykeys, "Only keys")
            console.log(onlykeys.indexOf('todo'))
            onlykeys.forEach(elements => {
                if ((elements.indexOf('todo') != -1) || (elements.indexOf('completed') != -1)) {
                    selectingOnlyTodoAndCompleted.push(elements)
                }

            });
            console.log(selectingOnlyTodoAndCompleted.includes('completed'), "only selecting todo and completed")
            console.log(checkIfelementExists(selectingOnlyTodoAndCompleted, 'completed'), "checking function")
                 console.log(selectingOnlyTodoAndCompleted)
            totalresponse[0].todotask = retunNumberOfRequiredTasks(selectingOnlyTodoAndCompleted, 'todo')
            totalresponse[0].completed = retunNumberOfRequiredTasks(selectingOnlyTodoAndCompleted, 'completed')
   
            console.log(totalresponse);
            //res.send(totalresponse);
        
    }});

    sql = `select itemstatus, count(inventoryid)FROM inventory where projectid=${projectid} and (itemstatus='unutilized' or itemstatus='utilized') group by itemstatus;`;
    model.query(sql, (err, inventoryMan) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2));
        }
        else {
            totalresponse = Object.values(JSON.parse(JSON.stringify(totalresponse)))
            inventoryMan = Object.values(JSON.parse(JSON.stringify(inventoryMan)))
            console.log(inventoryMan, "unutilized 1 in else block")
            onlykeys = inventoryMan.map((tasks, index) => (
                Object.values(tasks)
            ))
            console.log(onlykeys, "Only keys")
            console.log(onlykeys.indexOf('unutilized'))
            onlykeys.forEach(elements => {
                if ((elements.indexOf('unutilized') != -1) || (elements.indexOf('utilized') != -1)) {
                    selectingOnlyUtilizedAndUn.push(elements)
                }

            });
            console.log(selectingOnlyUtilizedAndUn.includes('utilized'), "only selecting todo and completed")
            console.log(checkIfelementExists(selectingOnlyUtilizedAndUn, 'utilized'), "checking function")
                 console.log(selectingOnlyUtilizedAndUn)
            totalresponse[0].unutilized = retunNumberOfRequiredItems(selectingOnlyUtilizedAndUn, 'unutilized')
            totalresponse[0].utilized = retunNumberOfRequiredItems(selectingOnlyUtilizedAndUn, 'utilized')
   
            console.log(totalresponse);
            res.send(totalresponse);
        }
    });
    }else{
        res.send(totalresponse)
    }

}

const retunNumberOfRequiredTasks = (arrayfield, whatToDo) => {
   
    if (whatToDo === "todo") {
        if (checkIfelementExists(arrayfield, whatToDo)) {
            console.log(whatToDo,'ifif')
            return 0
        } else {
            console.log(arrayfield[0][1])
            return arrayfield[0][1]
        }
    }
    else if (whatToDo === "completed") {
        if (checkIfelementExists(arrayfield, whatToDo)) {
            console.log(whatToDo,"elseifif")
            return 0
        } else {
            console.log(arrayfield[1][1])
            return arrayfield[1][1]
        }
    }
}


const retunNumberOfRequiredItems = (arrayfield, whatToDo) => {
   
    if (whatToDo === "unutilized") {
        if (checkIfelementExists(arrayfield, whatToDo)) {
            console.log(whatToDo,'ifif')
            return 0
        } else {
            console.log(arrayfield[0][1])
            return arrayfield[0][1]
        }
    }
    else if (whatToDo === "utilized") {
        if (checkIfelementExists(arrayfield, whatToDo)) {
            console.log(whatToDo,"elseifif")
            return 0
        } else {
            console.log(arrayfield[1][1])
            return arrayfield[1][1]
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
            console.log("true",tofind)
            return false
        } 
    }
    return true
}