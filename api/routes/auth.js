const express = require('express')
const router = express.Router()
const { login, register, logout } = require('../controllers/authController')




//pasar al front end
const { firebaseConfig } = require('../../src/utils/firebase')
const firebase = require('firebase')
const { createContext } = require('react')
firebase.initializeApp(firebaseConfig)

router.post('/login', login)
router.post('/register', register)
router.put('/logout', logout)

module.exports = router
