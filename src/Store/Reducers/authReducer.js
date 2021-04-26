const initState = {
    isLogged: false,
    authError: null
};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHECK_AUTH_STATE_SUCCESS':
            return {
                email: action.auth.email,
                isLogged: true,
                authError: null
            }
        case 'SIGNUP_SUCCESS':
            return {
                email: action.auth.user.email,
                isLogged: true,
                authError: null
            }
        case 'CREATE_USER_SUCCESS':
            return {
                ...state
            }
        case 'GET_ALL_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'LOGIN_SUCCESS':
            return {
                email: action.auth.user.email,
                isLogged: true,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            return {
               initState
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'email incorrect'
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: 'signup failed'
            }
        default:
            return state;
    };
};

export default authReducer;