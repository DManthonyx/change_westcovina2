export const CheckAuthState = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        try {
            const firebase = getFirebase()
            const auth = firebase.auth().currentUser
            console.log(auth, 'backend')
            if(auth) {
              dispatch({type: 'CHECK_AUTH_STATE_SUCCESS', auth})
            } 
        } catch(err) {
            dispatch({type: 'LOGIN_ERROR', err});
            console.log(err)
        }
    }
}

export const SignIn = (cred) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(cred.email, cred.password)
        .then((auth) => {
            dispatch({type: 'LOGIN_SUCCESS', auth})
        }).catch(err => {
            dispatch({type: 'LOGIN_ERROR', err});
        })
    }
}

export const SignOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'});
        }).catch(err => {
            console.log(err)
        })
    }
}

export const SignUpEmailPassword = (cred) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore()
        firebase.auth().createUserWithEmailAndPassword(cred.email, cred.password)
        .then((auth) => {
            firestore.collection('user').doc(auth.user.uid).set(cred)
            .then((user) => {
                console.log(user, 'this is from signup')
                dispatch({type: 'SIGNUP_SUCCESS', auth})
            }).catch(err => {
                dispatch({type: 'SIGNUP_ERROR', err});
            })
        }).catch(err => {
            dispatch({type: 'SIGNUP_ERROR', err});
        })
    }
}
