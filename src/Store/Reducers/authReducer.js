const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SIGNUP_SUCCESS':
            console.log('sign up sucess', action.auth)
            return {
                ...state,
                email: action.auth.user.email,
                isLogged: true,
                authError: null
            }
        case 'LOGIN_SUCCESS':
            console.log(action.auth, 'login sucess')
            return {
                ...state,
                email: action.auth.user.email,
                isLogged: true,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('sign out sucess')
            return {
                state,
            }
        case 'LOGIN_ERROR':
            console.log('login error', action.err)
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'SIGNUP_ERROR':
            console.log('login error', action.err)
            return {
                ...state,
                authError: 'Sign Failed'
            }
        default:
            return state;
    }
}

export default authReducer