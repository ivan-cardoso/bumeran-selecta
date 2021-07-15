const express = require('express')
const router = express.Router()
const recruitersController = require('../controllers/recruitersController')

router.get('/', recruitersController.findAll)
router.get('/search/:name', recruitersController.SearchByName)
router.post('/', recruitersController.findOrCreateRecruiter)
router.post('/:id', recruitersController.updateByPk)
router.delete('/:id', recruitersController.destroyRecrutierByPk)

module.exports = router
