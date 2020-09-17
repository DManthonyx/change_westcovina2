const initState = {

}

const articleReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE MESSAGE': 
            console.log('created news', action.message )
            return state;
        default:
            return state;
    }
}

export default articleReducer