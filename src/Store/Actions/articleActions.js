export const CreateArticle = (payload) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firestore.collection('articles').add({
            name: payload.name,
            date: payload.date,
            title: payload.title,
            article: payload.article
        }).then((messageRef) => {
            let filePath = `articles/${messageRef.id}/${payload.image.name}`;
            firebase.storage().ref(filePath).put(payload.image);
        }).catch(err => {
            console.log({err}, 'from article action');
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