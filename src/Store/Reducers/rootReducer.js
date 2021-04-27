import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import articleReducer from './articleReducer';
import resourceReducer from './resourceReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    article: articleReducer,
    resource: resourceReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;