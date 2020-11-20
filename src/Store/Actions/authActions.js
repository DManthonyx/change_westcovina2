export const CheckAuthState = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        try {
            const firebase = getFirebase();
            const auth = firebase.auth().currentUser;
            if(auth) {
              dispatch({type: 'CHECK_AUTH_STATE_SUCCESS', auth});
            }
        } catch(err) {
            dispatch({type: 'LOGIN_ERROR', err});
        }
    };
};

export const SignIn = (cred) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(cred.email, cred.password)
        .then((auth) => {
            dispatch({type: 'LOGIN_SUCCESS', auth});
        }).catch(err => {
            dispatch({type: 'LOGIN_ERROR', err});
        });
    };
};

export const SignOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'});
        }).catch(err => {
            console.log(err)
        });
    }
}

export const SignUpEmailPassword = (cred) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(cred.email, cred.password)
        .then((auth) => {
            firestore.collection('user').doc(auth.user.uid).set(cred)
            .then((user) => {
                dispatch({type: 'SIGNUP_SUCCESS', auth})
            }).catch(err => {
                dispatch({type: 'SIGNUP_ERROR', err});
            })
        }).catch(err => {
            dispatch({type: 'SIGNUP_ERROR', err});
        });
    };
};

export const CreateUser = (cred) => {
    return (dispatch, getState, { getFirebase, getFirestore  }) => {
        const firestore = getFirestore();
        firestore.collection('users').add(cred)
        .then((docRef) => {
            dispatch({type: 'CREATE_USER_SUCCESS', docRef})
        }).catch((err) => {
            console.log(err)
        });
    };
};

export const GetAllUsers = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const users = [];
            const firestore = getFirestore();
            firestore.collection("users").get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    users.push(doc.data());
                });
            }).then(() => {
                dispatch({type: 'GET_ALL_USERS', users});
            });
        } catch(err) {
            console.log(err);
        };
    };
};