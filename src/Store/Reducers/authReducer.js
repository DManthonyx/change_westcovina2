const initState = {
    isLogged: false,
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHECK_AUTH_STATE_SUCCESS':
            return {
                email: action.auth.email,
                isLogged: true,
                authError: null
            }
        case 'SIGNUP_SUCCESS':
            console.log('sign up sucess', action.auth)
            return {
                email: action.auth.user.email,
                isLogged: true,
                authError: null
            }
        case 'LOGIN_SUCCESS':
            console.log(action.auth, 'login sucess')
            return {
                email: action.auth.user.email,
                isLogged: true,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('sign out sucess')
            return {
               initState
            }
        case 'LOGIN_ERROR':
            console.log('login error', action.err)
            return {
                ...state,
                authError: 'email incorrect'
            }
        case 'SIGNUP_ERROR':
            console.log('signup error', action.err)
            return {
                ...state,
                authError: 'signup failed'
            }
        default:
            return state;
    }
}

export default authReducer