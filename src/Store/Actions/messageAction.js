export const CreateArticle = (article) => {
    console.log(article, 'from action')
    // return (dispatch, getState, { getFirebase, getFirestore }) => {
    //     // make async call to database
    //     const firestore = getFirestore();
    //     const firebase = getFirebase();
    //     firestore.collection('articles').add({
    //         ...message,
    //         userFirstName: 'markus',
    //         userLastName: 'matthews',
    //         userId: 1234,
    //         createdAt: new Date(),
    //         timestamp: firebase.firestore.FieldValue.serverTimestamp()
    //     }).then(() => {
    //         dispatch({type: 'CREATE MESSAGE', message})
    //     }).catch(err => {
    //         console.log(err, 'from message action')
    //     })
    // }
}

export const getSnapShotArticles = () => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()

    }
}