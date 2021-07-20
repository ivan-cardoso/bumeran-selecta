const express = require('express')
const router = express.Router()
const companiesController=require('../controllers/companiesController')

router.get('/', companiesController.findAll)
router.get('/:search',companiesController.findAllBySearch)
router.post('/', companiesController.findOrCreateCompanies)
router.post('/:id', companiesController.updateByPk)
router.delete('/:id', companiesController.destroyCompaniesByPk)



module.exports = router
