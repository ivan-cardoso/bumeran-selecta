const firebaseConfig = {
  apiKey: 'AIzaSyAvExraUkbIPt05YKnhUdRuX8ux_Mrwk3k',
  authDomain: 'naventp5.firebaseapp.com',
  projectId: 'naventp5',
  storageBucket: 'naventp5.appspot.com',
  messagingSenderId: '127675556030',
  appId: '1:127675556030:web:e7a3497bc5f088828b7eef',
}
// Initialize Firebase

// function setPersistenceSession() {
//   var email = '...'
//   var password = '...'

//   // [START auth_set_persistence_session]
//   firebase
//     .auth()
//     .setPersistence(firebase.auth.Auth.Persistence.SESSION)
//     .then(() => {
//       // Existing and future Auth states are now persisted in the current
//       // session only. Closing the window would clear any existing state even
//       // if a user forgets to sign out.
//       // ...
//       // New sign-in will be persisted with session persistence.
//       return firebase.auth().signInWithEmailAndPassword(email, password)
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       var errorCode = error.code
//       var errorMessage = error.message
//     })
//   // [END auth_set_persistence_session]
// }

module.exports = firebaseConfig
