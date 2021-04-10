const initState = {

}

const articleReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_MESSAGE':
            return state;
        case 'GET_ALL_ARTICLES':
            return {
                ...state,
                articles: action.data
            };
        default:
            return state;
    }
}

export default articleReducer