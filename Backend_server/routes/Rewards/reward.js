// get req for initial rewards that are unclaimed and display points
// post req to upload the rewards for the particular user
// post req when a reward is claimed and  delete that particular
// reward for that particular user and update the points for that particular user
const express = require('express')
const router = express.Router()
const rewardcontroller = require('../../controllers/RewardsController/rewardController')
router.get('/',rewardcontroller.getallrewards)
// for admin 
router.post('/postreward',rewardcontroller.uploadreward)
router.post('/',rewardcontroller.updatepoints)


module.exports=router;

