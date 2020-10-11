import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
// import Firebase, { FirebaseContext } from './Components/Firebase'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Store/Reducers/rootReducer'
import { Provider } from 'react-redux'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import thunk from 'redux-thunk'
import fbConfig from './Components/Firebase/fbConfig'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig),
  ));



ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App /> 
      </Router>
  </Provider>,
document.getElementById('root'));

