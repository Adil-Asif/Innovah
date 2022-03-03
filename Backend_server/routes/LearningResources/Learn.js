const express = require('express')
const LearnController = require('../../controllers/LearningResources/LearnController');
const router = express.Router()

router.get('/',LearnController.getallitems)
module.exports=router
// router.post()
