const express = require('express')
const router = express.Router()
const Ideascontroller = require('../../controllers/Ideas/IdeasController')
router.post('/addidea',Ideascontroller.addidea)
router.get('/myideas',Ideascontroller.getallitems)
router.post('/myideas',Ideascontroller.edititem)
router.post('/myideas/viewidea',Ideascontroller.getidea)
router.post('/myideas/viewidea/juryresponse',Ideascontroller.addjuryresponse)
router.get("/myideas/globalidea", Ideascontroller.viewglobalidea);
router.post("/myideas/globalidea/updatestatus", Ideascontroller.globalideaupdatestatus);
module.exports = router;