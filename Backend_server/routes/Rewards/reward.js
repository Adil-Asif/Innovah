const express = require('express')
const router = express.Router()
const rewardcontroller = require('../../controllers/RewardsController/rewardController');
router.get('/',rewardcontroller.getallrewards)

router.post('/postreward',rewardcontroller.uploadreward)
router.post('/claimreward',rewardcontroller.claimreward)


module.exports=router;

