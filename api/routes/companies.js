const express = require('express')
const router = express.Router()
const companiesController = require('../controllers/companiesController')

router.post('/filter', companiesController.findAllBySearch)
router.get('/singlecompany/:id', companiesController.getSingleCompany)
router.get('/jobs/:id', companiesController.getAllJobsByPkCompany)
router.get('/recruiters/:id', companiesController.getAllJobsByRecruiterId)
router.get(
  '/recruiters/active/:id',
  companiesController.getAllJobsAssignedByRecruiterId
)
router.put('/:id', companiesController.updateByPk)
router.put("/active/:id", companiesController.destroyCompaniesByPk);
router.post('/', companiesController.findOrCreateCompanies)
router.get('/', companiesController.findAll)

module.exports = router
