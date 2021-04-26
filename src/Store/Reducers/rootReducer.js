import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import articleReducer from './articleReducer';
import resourceReducer from './resourceReducer';
import initReducer from './initReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    article: articleReducer,
    resource: resourceReducer,
    initReducer: initReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;