const express = require('express')
const mysql = require('mysql')
const app = express()
require('dotenv').config()
console.log(process.env.USER, process.env.PASSWORD,process.env.DATABASE_NAME)
var db = mysql.createConnection({
    host: 'localhost',
    user:process.env.USER,
    password: process.env.PASSWORD,
    database:process.env.DATABASE_NAME
});




db.connect((err)=>{
    if(err){
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        

    }
    else{
        console.log("mysql connected");    
    }
});
// app.get('/createtables',(req,res)=>{

//    let sql = 'create table user_details(username VARCHAR(200) Not Null UNIQUE,city varchar(2000) Not Null,ph_num varchar(20) Not Null,country varchar(2000) Not Null,gender varchar(10),industry varchar(200) Not Null,userrole varchar(200) Not Null,picture varchar(200) Not Null,userid varchar(200) Primary KEY, email text Unique Not Null,password text Not Null,fullname text Not Null)';
//    let sql1 = 'create table idea( ideaid varchar(200) PRIMARY KEY, title varchar(200) Not Null, description varchar(200) Not Null, image varchar(2000) Not Null, visibility varchar(200) Not Null, ideaindustry varchar(200) Not Null, userid varchar(200) Not Null, foreign key (userid) references user_details(userid) )'; 
//    let sql2='create table idea_tags( tagvalue varchar(200), ideaid varchar(200), Foreign KEY (ideaid) REFERENCES idea(ideaid), PRIMARY KEY(tagvalue,ideaid) )';

//    let sql3='create table idea_deliverables( delivery varchar(200), ideaid varchar(200) , Foreign KEY (ideaid) REFERENCES idea(ideaid), PRIMARY KEY(delivery,ideaid) )';
//    let sql4='create table idea_insights( ideaid varchar(200), Foreign KEY (ideaid) REFERENCES idea(ideaid), insightid varchar(200) PRIMARY KEY, likes int Not Null, ideaviews int Not Null, insighttype varchar(200) Not Null )';
//    let sql5='create table idea_comment( ideaid varchar(200), Foreign KEY (ideaid) REFERENCES idea(ideaid), ideacomment varchar(2000) Not Null, commentby varchar(200) Not Null, insightid varchar(200) Not Null, Foreign Key (insightid) REFERENCES idea_insights(insightid), Primary key(insightid,commentby) )';
//    let sql6='create table posting_request( requestid varchar(200) PRIMARY KEY, ideatitle varchar(200) Not Null, requesttitle varchar(200) Not Null, requesttype varchar(200) Not Null,   image varchar(2000) Not Null, ideaid varchar(200) Not Null, foreign key (ideaid) references idea(ideaid)  )';
//    let sql7='create table request_insights( requestid varchar(200) Not null, Foreign KEY (requestid) REFERENCES posting_request(requestid), insightid varchar(200) PRIMARY KEY,  likes int Not Null, requestviews int not null, insighttype varchar(200) Not Null  )';
//    let sql8='create table request_comments( requestid varchar(200) Not null, ideaid varchar(200) not null,  requestcomment varchar(2000) Not Null, messageby varchar(200) Not Null, insightid varchar(200) Not Null, Foreign Key (insightid) REFERENCES idea_insights(insightid), Primary key(insightid,messageby), foreign key (requestid) references posting_request(requestid), foreign key(ideaid) references idea(ideaid) )';
//    let sql9='create table project_details( projectid varchar(200) Primary KEY, projecttitles varchar(200) Not Null, description varchar(200) Not Null, projectstatus varchar(200) Not Null, ideaid varchar(200) Not Null, foreign key (ideaid) references idea(ideaid)  )';
//    let sql10='create table project_members( projectid varchar(200) Not Null, memberid varchar(200) Not Null, Primary key(projectid,memberid), foreign key(projectid) references project_details(projectid) )';
//    let sql11='create table project_services( projectid varchar(200) Not null, servicename varchar(200) not null, Primary KEY(projectid,servicename), foreign key (projectid) references project_details(projectid) )';
//    let sql12='create table boards( projectid varchar(200) not null, boardid varchar(200) not null, taskstatus varchar(200) not null, taskname varchar(200) not null, tasktype varchar(200) not null, assignedto varchar(200) not null, taskdescription varchar(200) not null, primary key(boardid), foreign key(projectid) references project_details(projectid)  )';
//    let sql13='create table inventory( inventoryid varchar(200) not null, projectid varchar(200) not null, itemstatus varchar(200) not null, quantity int not null, inventoryvalue int not null, addedby varchar(200) not null, itemdescription varchar(200) not null,inventoryname text Not Null ,primary KEY(inventoryid), foreign KEY (projectid) references project_details(projectid) )';
//    let sql14='create table learning( trainerid varchar(200) , userid varchar(200) not null, foreign KEY(userid) references user_details (userid), title varchar(200), description varchar(200) not null, status varchar(200) not null,playlistid text Unique Not Null ,imageurl mediumtext not null,primary KEY (trainerid, title)    )';
   
//    let sql15='create table playlist( id varchar(200) , trainerid varchar(200) , status  varchar(200) not null, title  varchar(200) not null, description  varchar(200) not null, userid  varchar(200) , primary KEY (id, trainerid, userid), foreign KEY (trainerid,title) references learning(trainerid,title), foreign KEY (userid) references  user_details(userid)  )';
//    let sql16='create table competition( competitionid varchar(200) primary key, competitionname varchar(200) not null, description varchar(200) not null, startdate varchar(200) not null, difficulty varchar(200) not null, status varchar(200) not null, userid varchar(200) not null, foreign key(userid) REFERENCES user_details(userid) )';
//    let sql17='create table idea_hack( gameid varchar(200)  Primary key, competitionid varchar(200) not null, title varchar(200) not null, industry varchar(200) not null, targetaudience varchar(200) not null, description varchar(200) not null, foreign key (competitionid) references competition(competitionid)  )';
//    creating tables by executing following query
//    db.query(sql16 , (err,result)=>{
//        if(err){
//            console.log( JSON.stringify(err,undefined,2));
//        }
//        else{
//            console.log(result);
//            res.send("table created");
//        }
//    });
//    db.query(sql17 , (err,result)=>{
//        if(err){
//            console.log( JSON.stringify(err,undefined,2));
//        }
//        else{
//            console.log(result);
//            res.send("table created");
//        }
//    });
// });


// app.listen(5050,()=>{
//     console.log("THe database server is up and running....");
// })

module.exports=db
