import authReducer from './authReducer'
import articleReducer from './articleReducer'
import resourceReducer from './resourceReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    article: articleReducer,
    resource: resourceReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer