const initState = {
    isLogged: false,
    authError: null
};

const authReducer = (state = initState, action) => {
    let result = state;
    switch(action.type) {
        case 'CHECK_AUTH_STATE_SUCCESS':
            result = {
                email: action.auth.email,
                isLogged: true,
                authError: null
            };
            break;
        case 'SIGNUP_SUCCESS':
            result = {
                email: action.auth.user.email,
                isLogged: true,
                authError: null
            };
            break;
        case 'CREATE_USER_SUCCESS':
            result = {
                ...state
            };
            break;
        case 'GET_ALL_USERS':
            result = {
                ...state,
                users: action.users
            };
            break;
        case 'LOGIN_SUCCESS':
            result = {
                email: action.auth.user.email,
                isLogged: true,
                authError: null
            };
            break;
        case 'SIGNOUT_SUCCESS':
            result = {
               initState
            };
            break;
        case 'LOGIN_ERROR':
            result = {
                ...state,
                authError: 'email incorrect'
            };
            break;
        case 'SIGNUP_ERROR':
            result = {
                ...state,
                authError: 'signup failed'
            };
            break;
        default:
            return state;
    };
    return result;
};

export default authReducer;