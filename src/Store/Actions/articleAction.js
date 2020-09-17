export const CreateArticle = (article) => {
    console.log(article, 'from action')
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const firebase = getFirebase();
        console.log(firestore, 'this is firebase')
        firestore.collection('articles').add({
            // user: article.user,
            title: article.title,
            body: article.body,
            // img: article.img,
            createdAt: new Date(),
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then((res) => {
            console.log(res.if.path.segments[1], 'UID from created article')
            dispatch({type: 'CREATE MESSAGE'})
        }).catch(err => {
            console.log(err, 'from message action')
        })
    }
}

// export const getSnapShotArticles = () => {
//     return (dispatch, getState, {getFirestore}) => {
//         const firestore = getFirestore()

//     }
// }