const express = require('express')
const requestController = require('./../../controllers/RequestsController/requestsController')
const router = express.Router()
router.post('/addnewrequest',requestController.addNewRequest)


module.exports = router