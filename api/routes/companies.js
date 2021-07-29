const express = require('express')
const router = express.Router()
const companiesController=require('../controllers/companiesController')

router.get('/', companiesController.findAll)
router.get("/:search", companiesController.findAllBySearch);
router.get("/jobs/:id", companiesController.getAllJobsByPkCompany);
router.get("/singlecompany/:id", companiesController.getSingleCompany);
router.post('/', companiesController.findOrCreateCompanies)
router.put("/:id", companiesController.updateByPk);
router.delete('/:id', companiesController.destroyCompaniesByPk)
router.get("/getOneSingleCompany/:id", companiesController.getOneSingleCompany);



module.exports = router
