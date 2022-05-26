const model = require('./../../models/database')
const session = require('sessionstorage')
const nodemailer = require("nodemailer");
exports.addNewRequest = async (req, res) => {
    userid =  req.params.userid
    console.log(userid)
    let currentID
    console.log(req.body)
    console.log("######################################################")
    let sql = `SELECT MAX(CAST(requestid AS SIGNED)) as maxkey FROM posting_request;`
    await model.query(sql, (err, result) => {
        try {
            console.log(result, "result");
            if (result[0].maxkey === null) {
                currentID = 1
            } else {
                currentID = Object.values(JSON.parse(JSON.stringify(result)))
                console.log(currentID, "currentID 1 in else block")
                currentID = parseInt(Object.values(currentID[0]))
                currentID += 1
                console.log(currentID)
                console.log(currentID, "currentID 2")
            }

            sql = `insert into posting_request(requestid, requesttitle, request_description, userid,image,isHired) values ('${currentID}','${req.body.requestTitle}','${req.body.requestDescription}','${userid}','${req.body.requestImage}',${false});`
            console.log(currentID,"is current ID prinintg")
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

exports.gettAllYourRequests = (req, res) => {
   let userid =  req.params.userid
    console.log(userid)

    let sql = `select  requestid, requesttitle, request_description,image,isHired from posting_request where userid= '${userid}' `;
    model.query(sql, (err, result) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2)); //
        }
        else {
         //   console.log(result);
            res.send(result);
        }
    });
}

exports.gettAllRequests = (req, res) => {
    // userid ='50cc2100-a79a-11ec-a453-c3c9e76e527c'
    //console.log(userid)
 
    let sql = "select  requestid, requesttitle, request_description,image,isHired,userid from posting_request where isHired = false ";
    model.query(sql, (err, result) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2)); //
        }
        else {
         //   console.log(result);
            res.send(result);
        }
    });
}

exports.postRequestSubmittion = (req, res) => {
    //console.log(req)
    var currentID
    console.log(req.body)
    session.removeItem("ErrorInfo");
    console.log("Function statred")
    let sql = `select submission_id from submission_table where submitted_by = '${req.body.submitted_by}' and request_id = '${req.body.request_id}'`

    model.query(sql, (err, result) => {
        try {
            console.log(result, "result", typeof result, Object.keys(result).length)
console.log("Before if and checking condition")
            if (Object.keys(result).length !== 0 || Object.values(JSON.parse(JSON.stringify(result))).length!==0 || result.length!==0) {
               var errorInfo = {"ErrorInfo":"User already present"}
               session.setItem('ErroInfo',"User already present");
                console.log("Sending error info",errorInfo)
                res.send(errorInfo)
                
                return;
            }
            else{
                errorInfo={}
            }
        } catch (error) {
            console.log(error)
            //     res.send({ "DataEntry": false })


        }
    });
    
    console.log("####################################")
    console.log("Before error",session.getItem('ErroInfo'))
    if (session.getItem('ErroInfo')) {
        console.log("in error info", session.getItem('ErroInfo'))
        return
    }
    console.log("bbread")
    sql = `SELECT MAX(CAST(submission_id AS SIGNED)) FROM submission_table;`
    model.query(sql, (err, result) => {
        try {
            console.log(result, "result", Object.values(JSON.parse(JSON.stringify(result[0]))))
            let forNewID = Object.values(JSON.parse(JSON.stringify(result[0])))[0]
            if (forNewID === null) {
                currentID = 1
                console.log("in if clasue to check", Object.values(Object.values(result)))
            } else {
                currentID = Object.values(JSON.parse(JSON.stringify(result)))
                console.log(currentID, "currentID 1 in else block")
                currentID = parseInt(Object.values(currentID[0]))
                currentID += 1
                console.log(currentID)
                console.log(currentID, "currentID 2")
            }




            sql = `insert into submission_table(submission_id, submitted_by, request_id, proposal_content) values ('${currentID}','${req.body.submitted_by}','${req.body.request_id}','${req.body.proposal_content}');`
            console.log(currentID)
            model.query(sql, (err, result) => {
                try {
                    console.log(result)
                    res.send({ "DataEntry": true })

                    return
                } catch (error) {
                    console.log(error)
                    //         res.send({ "DataEntry": false })


                }


            });

        } catch (error) {
            console.log(error)

            //  res.send({ "DataEntry": false })
        }


    });
}

exports.gettAllYourSubmissions=(req,res)=>{
   let userid =  req.params.userid
    console.log(userid)
    let requestid =  req.params.requestid
    console.log(requestid)
    let sql = `SELECT requesttitle,proposal_content,submission_id,submitted_by,userid,requestid FROM submission_table inner JOIN  posting_request on submission_table.request_id = posting_request.requestid  WHERE userid = '${userid}' and requestid ='${requestid}' and isHired = false;`
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
exports.sendMailOfSubmission =(req,res)=>{
console.log(req.body)
//sending mail to the person hired
let sql = `SELECT fullname,email FROM user_details where userid = '${req.body.submittedby}'` ;
    model.query(sql, (err, result) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2)); //
        }
        else {
          let [name,mail]=[Object.values(result[0])[0],Object.values(result[0])[1]]
          console.log(mail,name)
          sendingMailFunction(mail,name,false)

           
        }
    });
     sql = `SELECT fullname,email FROM user_details where userid = '${req.body.requestedby}'` ;
    model.query(sql, (err, result) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2)); //
        }
        else {
            
            let [name,mail]=[Object.values(result[0])[0],Object.values(result[0])[1]]
          console.log(mail,name)
          sendingMailFunction(mail,name,true)

           
        }
    });
    sql = `Update posting_request set isHired = true  where requestid = '${req.body.postid}'` ;
    model.query(sql, (err, result) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2)); //
        }
        else {
           
            console.log("mails sent")
         

           
        }
    });
    sql = `DELETE FROM submission_table where request_id = '${req.body.postid}'` ;
    model.query(sql, (err, result) => {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2)); //
        }
        else {
           
            res.send({"Email":"sucess"})
         

           
        }
    });

}

const sendingMailFunction = async(emailaddress,name,requestOwner)=>{

    console.log("in mail function",emailaddress,name)
    let message = ""
    let subject = ""
    if(requestOwner){
        console.log("good")
        message = " congrates person is hired"
        subject = " congrats person is recruited to be an effective member of your team"
    }
    else{
        message = `Hi ${name}, Thanks for Applying, our hiring team was very excited to meet you. 
        You impressed us with your skills and we believe you'll fit well in our team. `
        subject="Congrats you have been hired"
    }
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'm.hasaan1999@gmail.com',
          pass: 'ytralywqpwxrenyk'
        }
      });
    const info =  {
        from: 'm.hasaan1999@gmail.com',
        to: emailaddress,
        subject:subject,
        text: message
      };
    
    
   
await transporter.sendMail(info,(err)=>{
    if(err){
        console.log(`Error has Occures${err}`)
    }
    else{
        console.log("email is sent")
    }
})

}