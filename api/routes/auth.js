const express = require('express')
const router = express.Router()
const { login, register } = require('../controllers/authController')

//pasar al front end
const firebaseConfig = require('../../src/utils/firebase')
const firebase = require('firebase')
firebase.initializeApp(firebaseConfig)

router.post('/login', login)
router.post('/register', register)

module.exports = router
