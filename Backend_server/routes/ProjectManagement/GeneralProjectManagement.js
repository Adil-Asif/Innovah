const express = require('express')
const projectManagemetController = require('./../../controllers/ProjectManagement/GeneralProjectManagementController')
const router = express.Router()
router.get('/:userid', projectManagemetController.returnAllData)
// router.get('/:userid/:projectid', projectManagemetController.returnSpecificRecord)
router.get('/newProject/projectform/getideas/:userid', projectManagemetController.getAllIdeasData)
router.get('/newProject/projectform/getAllPeople', projectManagemetController.getAllPeople)
router.post('/newProject/projectsubmission/storingtodb', projectManagemetController.savingProjectInfo)

module.exports=router