const express = require('express')
const requestController = require('./../../controllers/RequestsController/requestsController')
const router = express.Router()
router.post('/addnewrequest',requestController.addNewRequest)
router.get('/yourrequests',requestController.gettAllYourRequests)
router.get('/allrequests',requestController.gettAllRequests)
router.post('/submitrequest',requestController.postRequestSubmittion)
router.get('/getallyoursubmissions',requestController.gettAllYourSubmissions)
router.post('/sendinghiringmail',requestController.sendMailOfSubmission)


module.exports = router