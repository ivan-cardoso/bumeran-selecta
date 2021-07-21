const firebase = require('firebase')

const register = (req, res) => {
  const { email, password } = req.body
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user
      res.send(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code
      var errorMessage = error.message
      res.send(errorMessage)
      
      // ..
    })
}

const login = (req, res) => {
  const { email, password } = req.body
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user
      res.send(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code
      var errorMessage = error.message
      // res.status(404).send(errorCode)
      res.status(400).send(errorMessage)
    })
}
const logout = (req, res) => {
  firebase
    .auth()
    .signOut()
    .then((info) => {
      res.send(info)
    })
    .catch((error) => {
      res.status(400).send(error)
    })
}

module.exports = { register, login, logout }
