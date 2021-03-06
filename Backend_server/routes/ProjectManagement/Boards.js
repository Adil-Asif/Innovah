//In here we will be further defining all of the routes which will be like /Login/ or login/signup or 
//login/something and its functionality will be called from controllers file
const express = require('express')

const boardController = require('../../controllers/ProjectManagement/BoardsController')
const router = express.Router()

router.get('/getboard/:id', boardController.getAllIBoards)
router.post('/:id/addnewtask',boardController.addNewBoard)
router.get('/getboard/:id/filter',boardController.getFilteredBoard)
// router.post('/deleteboard',inventoryController.deleteinventory)
router.post("/updateboard",boardController.updateBoard)

module.exports=router