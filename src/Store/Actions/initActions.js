export const InitApp = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const state = {};
            const firestore = getFirestore();
            firestore.collection('communityResource').get()
            .then(function(querySnapshot) {
      
            }).then(() => {
                dispatch({type: 'INIT_APP', state})
            });
        } catch(err) {
            console.log(err);
        };
    };
};