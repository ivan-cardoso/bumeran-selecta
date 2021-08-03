const express = require('express')
const router = express.Router()
const User = require('../db/models/users')
const Roles = require('../db/models/roles')
const { firebase, admin } = require('../firebase')

// Create a storage reference from our storage service

router.post('/register', (req, res) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then((userCredential) => {
      const user = userCredential.user

      return Roles.findOne({ where: { name: req.body.role } }).then((role) => {
        return User.create({
          ...user,
          name: req.body.name,
          surname: req.body.surname,
          img: req.body.img,
        }).then((user) => {
          role.addUser(user)
          res.json(user)
        })
      })
    })
    .catch((err) => res.json(err.code))
})

router.delete('/delete/:uid', (req, res) => {
  admin
    .auth()
    .deleteUser(req.params.uid)
    .then((userRecord) => {
      User.destroy({ where: { uid: req.params.uid } }).then(() =>
        res.sendStatus(200)
      )
    })
    .catch((error) => {
      console.log('Error fetching user data:', error)
    })
})

router.get('/all', (req, res) => {
  User.findAll({ include: Roles })
    .then((user) => res.json(user))
    .catch((err) => console.log(err))
})

router.get('/:uid', (req, res) => {
  User.findOne({ where: { uid: req.params.uid }, include: Roles })
    .then((user) => res.json(user))
    .catch((err) => console.log(err))
})
router.put('/update/:uid', (req, res, next) => {
  const { name, surname, img, roleId } = req.body
  User.update(
    { name, surname, img, roleId },
    { where: { uid: req.params.uid }, returning: true }
  )
    .then((user) => res.status(200).json(user[1]))
    .catch((err) => next(err))
})

module.exports = router
