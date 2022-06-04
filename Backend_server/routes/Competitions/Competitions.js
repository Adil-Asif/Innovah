const express = require('express')
const router = express.Router()

const competitionController = require('./../../controllers/Competitions/CompetitionsController')

router.post('/submit/answer',competitionController.submittingAnswer)
router.get('/getAllsubmissions/:competitions',competitionController.gettingAllSubmissions)
router.post('/addingpoints',competitionController.addingPoints)
module.exports = router