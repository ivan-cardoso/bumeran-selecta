var firebase = require('firebase/app')
require('firebase/storage')

const firebaseConfig = {
  apiKey: 'AIzaSyAvExraUkbIPt05YKnhUdRuX8ux_Mrwk3k',
  authDomain: 'naventp5.firebaseapp.com',
  projectId: 'naventp5',
  storageBucket: 'naventp5.appspot.com',
  messagingSenderId: '127675556030',
  appId: '1:127675556030:web:e7a3497bc5f088828b7eef',
}

firebase.initializeApp(firebaseConfig)

// const firebaseAdminConfig = {
//   apiKey: 'AIzaSyAvExraUkbIPt05YKnhUdRuX8ux_Mrwk3k',
//   authDomain: 'naventp5.firebaseapp.com',
//   projectId: 'naventp5',
//   storageBucket: 'naventp5.appspot.com',
//   messagingSenderId: '127675556030',
//   appId: '1:127675556030:web:e7a3497bc5f088828b7eef',
// }

module.exports = firebase
