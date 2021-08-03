var firebase = require('firebase')
var admin = require('firebase-admin')

require('firebase/storage')
var serviceAccount = require('../naventp5-firebase-adminsdk-rbf1p-672c6115c0.json')

const firebaseConfig = {
  apiKey: 'AIzaSyAvExraUkbIPt05YKnhUdRuX8ux_Mrwk3k',
  authDomain: 'naventp5.firebaseapp.com',
  projectId: 'naventp5',
  storageBucket: 'naventp5.appspot.com',
  messagingSenderId: '127675556030',
  appId: '1:127675556030:web:e7a3497bc5f088828b7eef',
}

firebase.initializeApp(firebaseConfig)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})
module.exports = { firebase, admin }
