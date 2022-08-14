const initState = {};
const initReducer = (state = initState, action) => {
    let result = state;
    switch(action.type) {
        case 'INIT_APP':
            result = {
                ...action.state,
            };
            break;
        default:
            return state;
    };
    return result;
};

export default initReducer;