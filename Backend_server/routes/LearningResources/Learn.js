const express = require('express')
const LearnController = require('../../controllers/LearningResources/LearnController');
const router = express.Router()
router.post('/addingresource',LearnController.addresource)
router.get('/',LearnController.getallitems)
router.post('/',LearnController.changeenrollstatus)
router.post('/playlist',LearnController.getplaylist)
router.post('/playlist/video',LearnController.getvideo)
module.exports=router
// router.post()
