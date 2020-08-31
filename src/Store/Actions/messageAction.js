export const createMessage = (message) => {
    console.log(message, 'from action')
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('messages').add({
            ...message,
            userFirstName: 'markus',
            userLastName: 'matthews',
            userId: 1234,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE MESSAGE', message})
        }).catch(err => {
            console.log(err, 'from message action')
        })
    }
}