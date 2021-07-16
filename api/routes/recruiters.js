const express = require('express')
const router = express.Router()
const recruitersController = require('../controllers/recruitersController')

router.get('/search/:name', recruitersController.SearchByName)
router.get('/', recruitersController.findAll)
router.post('/', recruitersController.findOrCreateRecruiter)
router.put('/:id', recruitersController.updateByPk)
router.delete('/:id', recruitersController.destroyRecrutierByPk)

module.exports = router
