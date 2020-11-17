const resourceReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_COMMUNITY_RESOURCE': 
            return {
                communityResource: action.data,
                ...state
            };
        case 'GET_ABUSE_RESOURCE': 
            return {
                abuse: action.data,
                ...state
            };
        case 'GET_CRISIS_INTERVENTION_RESOURCE': 
            return {
                crisisIntervention: action.data,
                ...state
            };
        case 'GET_CRISIS_TALK_LINES_RESOURCE': 
            return {
                crisisTalkLines: action.data,
                ...state
            };
        default:
            return state;
    }
}

export default resourceReducer