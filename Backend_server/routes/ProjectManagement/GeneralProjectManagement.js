const express = require('express')
const projectManagemet = require('./../../controllers/ProjectManagement/GeneralProjectManagementController')
const router = express.Router()
router.get('/:userid', projectManagemet.returnAllData)
router.get('/:userid/:projectid', projectManagemet.returnSpecificRecord)

module.exports=router