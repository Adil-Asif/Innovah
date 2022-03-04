const express = require('express')
const inventoryController = require('../../controllers/ProjectManagement/InventoryController')
const router = express.Router()
router.get('/getinventory/:id',inventoryController.getAllInventory)
router.post('/:id/addnewitem',inventoryController.addNewInventory)

module.exports =router