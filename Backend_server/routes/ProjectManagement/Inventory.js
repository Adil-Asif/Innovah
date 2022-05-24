const express = require('express')
const inventoryController = require('../../controllers/ProjectManagement/InventoryController')
const router = express.Router()
router.get('/getinventory/:id',inventoryController.getAllInventory)
router.post('/:id/addnewitem',inventoryController.addNewInventory)
router.get('/getinventory/:id/filter',inventoryController.getFilteredInventory)
router.post('/deleteinventory',inventoryController.deleteinventory)
router.post("/updateitem",inventoryController.updateInventory)


module.exports =router