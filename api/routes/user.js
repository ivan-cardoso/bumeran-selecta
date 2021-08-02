const express = require('express')
const router = express.Router()
const User = require('../db/models/users')
const Roles = require('../db/models/roles')
const firebase = require('../firebase')
const admin = require('firebase-admin')

const Users = require('../db/models/users')

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
        }).then((user) => {
          role.addUser(user)
          res.json(user)
        })
      })
    })
    .catch((err) => res.json(err.code))
})

router.delete('/delete/:uid', (req, res) => {
  console.log('en delete')

  admin
    .auth()
    .deleteUser(req.params.uid)
    .then(() => {
      console.log('Successfully deleted user')
    })
    .catch((error) => {
      console.log('Error deleting user:', error)
    })

  // firebase
  //   .auth()
  //   .currentUser.deleteUser(req.params.uid)
  //   .then((userDeleted) => {
  //     User.destroy({ where: { uid: req.params.uid } }).then((ok) =>
  //       res.sendStatus(200)
  //     )
  //   })
  // .catch((err) => res.json(err.code))
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

module.exports = router
