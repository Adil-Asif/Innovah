const express = require('express')
const requestController = require('./../../controllers/RequestsController/requestsController')
const router = express.Router()
router.post('/addnewrequest/:userid',requestController.addNewRequest)
router.get('/yourrequests/:userid',requestController.gettAllYourRequests)
router.get('/allrequests',requestController.gettAllRequests)
router.post('/submitrequest',requestController.postRequestSubmittion)
router.get('/getallyoursubmissions/:userid/:requestid',requestController.gettAllYourSubmissions)
router.post('/sendinghiringmail',requestController.sendMailOfSubmission)
router.post('/updaterequest',requestController.updateRequest)


module.exports = router