const initState = {};

const articleReducer = (state = initState, action) => {
    let result = state;
    switch(action.type) {
        case 'CREATE_MESSAGE':
            result = state;
            break;
        case 'GET_ALL_ARTICLES':
            result = {
                ...state,
                articles: action.data,
                current: action.data[0]
            };
            break;
        case 'UPDATE_CURRENT_ARTICLE':
            result = {
                ...state,
                current: action.data
            };
            break;
        default:
            result = state;
    };
    return result;
};

export default articleReducer;