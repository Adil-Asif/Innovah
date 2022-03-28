const express = require('express')
const inventoryController = require('../../controllers/ProjectManagement/InventoryController')
const router = express.Router()
router.get('/getinventory/:id',inventoryController.getAllInventory)
router.post('/:id/addnewitem',inventoryController.addNewInventory)
router.post('/getinventory/:id/filter',inventoryController.getFilteredInventory)
router.post('/deleteinvenrory',inventoryController.deleteinventory)


module.exports =router