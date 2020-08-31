export const SignIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
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

export const SignUp = (credentials) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then((auth) => {
            firestore.collection('user').doc(auth.user.uid).set({
                email: '',
                firstName: '',
                lastName: '',
                age: 0,
                gender: '',
                isActive: true,

            }).then((user) => {
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
