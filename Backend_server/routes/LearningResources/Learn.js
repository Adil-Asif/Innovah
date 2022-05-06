const express = require('express')
const LearnController = require('../../controllers/LearningResources/LearnController');
const router = express.Router()
router.post('/addingresource',LearnController.addresource)
router.get('/',LearnController.getallitems)
router.post('/',LearnController.changeenrollstatus)
router.get('/playlist',LearnController.getplaylist)
router.get('/playlist/video',LearnController.getvideo)
module.exports=router
// router.post()
