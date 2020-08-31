const initState = {
    messages: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}

const messageReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE MESSAGE': 
            console.log('created news', action.message )
            return state;
        default:
            return state;
    }
}

export default messageReducer