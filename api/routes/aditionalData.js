const express = require('express')
const router = express.Router()
const aditionalDataController = require('../controllers/aditionalDataController')

router.get('/areas', aditionalDataController.getAreas)
router.get('/states', aditionalDataController.getStates)
router.get('/seniorities', aditionalDataController.getSeniorities)
router.get('/modalities', aditionalDataController.getModalities)
router.get('/typeOfEmployeds', aditionalDataController.getTypeEmployed)
router.get('/roles', aditionalDataController.getRoles)

module.exports = router
