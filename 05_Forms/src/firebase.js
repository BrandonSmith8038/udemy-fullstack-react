import * as firebase from 'firebase'

import config from './firebaseConfig'

firebase.initializeApp(config)

const firebaseDB = firebase.database()
const googleAuth = new firebase.auth.GoogleAuthProvider()


export {
  firebase,
  firebaseDB,
  googleAuth
}
