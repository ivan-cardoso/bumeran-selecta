const router = require('express').Router()

router.use('/auth', require('./auth'))
router.use('/recruiters', require('./recruiters'))
router.use('/companies', require('./companies'))
router.use('/jobs', require('./jobs'))
router.use('/aditionalData', require('./aditionalData'))
router.use('/user', require('./user'))

module.exports = router
