const initState = {};

const resourceReducer = (state = initState, action) => {
    let result = state;
    switch(action.type) {
        case 'GET_COMMUNITY_RESOURCE':
            result = {
                communityResource: action.data,
                ...state
            };
            break;
        case 'GET_ABUSE_RESOURCE':
            result = {
                abuse: action.data,
                ...state
            };
            break;
        case 'GET_CRISIS_INTERVENTION_RESOURCE':
            result = {
                crisisIntervention: action.data,
                ...state
            };
            break;
        case 'GET_CRISIS_TALK_LINES_RESOURCE':
            result = {
                crisisTalkLines: action.data,
                ...state
            };
            break;
        case 'GET_EVENTS_DATA':
            result = {
                events: action.data,
                ...state
            };
            break;
        case 'GET_MAP_RESOURCE_DATA':
            result = {
                mapResources: action.data,
                ...state
            };
            break;
        default:
            return state;
    };
    return result;
};

export default resourceReducer;