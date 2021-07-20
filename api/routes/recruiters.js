const express = require('express')
const router = express.Router()

const recruitersController = require('../controllers/recruitersController')
const firebase = require('../firebase')

// Create a storage reference from our storage service

router.post('/test', (req, res) => {
  console.log('req.body', req.body)
  var storageRef = firebase.storage().ref()
  var mountainsRef = storageRef.child(req.body.name)

  mountainsRef.put(req.body).then(function (snapshot) {
    console.log('Uploaded a blob or file!')
  })
  console.log('reqbody eh', req.body)
  console.log('formData', req.body.formData)
})
router.get('/search/:name', recruitersController.SearchByName)
router.get('/', recruitersController.findAll)
router.post('/', recruitersController.findOrCreateRecruiter)
router.put('/:id', recruitersController.updateByPk)
router.delete('/:id', recruitersController.destroyRecrutierByPk)

module.exports = router
