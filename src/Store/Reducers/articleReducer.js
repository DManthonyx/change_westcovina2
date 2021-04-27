const initState = {

};

const articleReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_MESSAGE':
            return state;
        case 'GET_ALL_ARTICLES':
            return {
                ...state,
                articles: action.data,
                current: action.data[0]
            };
        case 'UPDATE_CURRENT_ARTICLE':
            return {
                ...state,
                current: action.data
            };
        default:
            return state;
    };
};

export default articleReducer;