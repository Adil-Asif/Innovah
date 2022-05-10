const express = require("express")
const router = express.Router()
const Profile = require('../../controllers/Profile/Profile');

router.get('/',Profile.getalldetails)





module.exports = router;