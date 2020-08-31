// import firebase from 'firebase/app';
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/storage'


// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_ID
// };

// class Firebase {
//   constructor() {
//     firebase.initializeApp(config)
//     this.auth = firebase.auth()
//     this.db = firebase.firestore({ timestampsInSnapshots: true })
//     this.storage = firebase.storage()
//     this.reauthenticate = firebase.auth.EmailAuthProvider
//   }
   
//     doSignInWithEmailAndPassword = (email, password) => {
//     return this.auth.signInWithEmailAndPassword(email, password)
//   } 

//     doCreateUserWithEmailAndPassword = (email, password) => {
//     return  this.auth.createUserWithEmailAndPassword(email, password)
//   }

//   doSignOut = () => this.auth.signOut()

//   doPasswordUpdate = password => {
//     return  this.auth.currentUser.updatePassword(password)
//   }

//   user = uid => this.db.collection('users').doc(uid)

//   users = () => this.db.collection('users')

// }

// export default Firebase