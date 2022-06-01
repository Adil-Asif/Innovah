const model = require("../../models/database");

exports.getAllInventory = (req, res) => {
  projectID = req.params.id;
  let sql =
    "SELECT inventoryid,projectid,itemstatus,quantity,inventoryvalue,addedby,itemdescription,inventoryname	 FROM inventory where projectid=" +
    projectID +
    " ORDER BY CAST(inventoryid AS SIGNED) DESC";
  model.query(sql, (err, result) => {
    if (err) {
      console.log(JSON.stringify(err, undefined, 2));
    } else {
      //   console.log(result);
      res.send(result);
    }
  });
};
exports.addNewInventory = async (req, res) => {
  let currentID;
  console.log(req.body);
  console.log("######################################################");
  let sql = `SELECT MAX( CAST(inventoryid AS SIGNED)) as maxkey FROM inventory;`;
  await model.query(sql, (err, result) => {
    try {
      console.log(result, result.length, "result");
      if (result[0].maxkey === null) {
        currentID = 1;
      } else {
        currentID = Object.values(JSON.parse(JSON.stringify(result)));
        console.log(currentID, "currentID 1 in else block");
        currentID = parseInt(Object.values(currentID[0]));
        currentID += 1;
        console.log(currentID);
        console.log(currentID, "currentID 2");
      }

      sql = `insert into inventory(inventoryname,inventoryid,projectid,itemstatus,quantity,inventoryvalue,addedby,itemdescription) values ('${req.body.Item_Name}','${currentID}','${req.body.projectid}','Added',${req.body.quantity},${req.body.inventoryvalue},'${req.body.addedby}','${req.body.itemdescription}');`;
      console.log(currentID);
      model.query(sql, (err, result) => {
        try {
          console.log(result);
          console.log(err);
          res.send({ DataEntry: true });
        } catch (error) {
          console.log(error);
          res.send({ DataEntry: false });
        }
      });
    } catch (error) {
      console.log(error);

      res.send({ DataEntry: false });
    }
  });
};

exports.getFilteredInventory = (req, res) => {
  let projectID = req.params.id;
  let sql = `SELECT count(inventoryid) as itemcount,itemstatus FROM inventory where projectid= '${projectID}' GROUP BY itemstatus`;
  model.query(sql, (err, result) => {
    if (err) {
      console.log(JSON.stringify(err, undefined, 2));
    } else {
      console.log(result);
      res.send(result);
    }
  });
};
//

exports.deleteinventory = (req, res) => {
  let projectID = req.params.id;
  let todelete = req.params.idToDelete;
  let sql = `DELETE FROM inventory where inventoryid ='${todelete}'`;
  model.query(sql, (err, result) => {
    if (err) {
      console.log(JSON.stringify(err, undefined, 2));
    } else {
      console.log(result);
      res.send({ Delete: "Sucess" });
    }
  });
};

exports.updateInventory = (req, res) => {
  let inventoryid = req.body.inventoryid;
  let updateStatus = req.body.updateStatus;
  console.log(inventoryid, updateStatus);
  let sql = `UPDATE inventory SET itemstatus='${updateStatus}' WHERE inventoryid ='${inventoryid}'`;
  model.query(sql, (err, result) => {
    if (err) {
      console.log(JSON.stringify(err, undefined, 2));
    } else {
      console.log(result);
      res.send({ Delete: "Sucess" });
    }
  });
};
exports.groupInventory = (req, res) => {};
