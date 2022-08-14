
export const CreateArticle = (payload) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firestore.collection('articles').add({
            name: payload.name,
            title: payload.title,
            article: payload.article,
            date: new Date()
        }).then( async (messageRef) => {
            console.log(messageRef, 'message Ref');
            const filePath = `articles/${messageRef.id}/${payload.image.name}`;
            const ref = firebase.storage().ref();
            const fileRef = ref.child(filePath);

            await fileRef.put(payload.image);

            return;
        }).catch(err => {
            return err;
        });
    };
};

export const GetAllArticles = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const data = [];
            const firestore = getFirestore();
            firestore.collection('articles').get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    let result = doc.data();
                    result['id'] = doc.id;
                    data.push(result);
                });
            }).then(() => {
                console.log(data, ',<<<< data')
                dispatch({type: 'GET_ALL_ARTICLES', data});
            });
        } catch(err) {
            console.log({err});
        };
    };
};

export const UpdateCurrentArticle = (article) => {
    return (dispatch, getState) => {
        try {
            const data = article;
            dispatch({type: 'UPDATE_CURRENT_ARTICLE', data});
        } catch(err) {
            console.log({err});
        }
    };
};