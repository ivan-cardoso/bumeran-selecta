const express = require('express')
const router = express.Router()

const recruitersController = require('../controllers/recruitersController')

// Create a storage reference from our storage service

router.get('/topthree', recruitersController.getTopThreeRecruiters)
router.get('/search/:name', recruitersController.SearchByName)
router.get('/', recruitersController.findAll)
router.post("/filter", recruitersController.findAllBySearch)
router.post('/', recruitersController.findOrCreateRecruiter)
router.put('/:id', recruitersController.updateByPk)
router.delete('/:id', recruitersController.destroyRecrutierByPk)

module.exports = router
