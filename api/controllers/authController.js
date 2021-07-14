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
      res.send(errorMessage)
    })
}

module.exports = { register, login }
