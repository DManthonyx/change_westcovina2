const initReducer = (state = {}, action) => {
    switch(action.type) {
        case 'INIT_APP':
            return {
                ...action.state,
            };
        default:
            return state;
    };
};

export default initReducer;