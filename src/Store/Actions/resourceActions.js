export const CommunityData = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const data = [];
            const firestore = getFirestore();
            firestore.collection('communityResource').get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    data.push(doc.data());
                });
            }).then(() => {
                dispatch({type: 'GET_COMMUNITY_RESOURCE', data})
            });
        } catch(err) {
            console.log(err);
        };
    };
};

export const AbuseData = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const data = [];
            const firestore = getFirestore();
            firestore.collection('abuse').get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    data.push(doc.data());
                });
            }).then(() => {
                dispatch({type: 'GET_ABUSE_RESOURCE', data})
            });
        } catch(err) {
            console.log(err);
        };
    };
};

export const CrisisInterventionData = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const data = [];
            const firestore = getFirestore();
            firestore.collection('crisisIntervention').get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    data.push(doc.data());
                });
            }).then(() => {
                dispatch({type: 'GET_CRISIS_INTERVENTION_RESOURCE', data})
            });
        } catch(err) {
            console.log(err);
        };
    };
};

export const CrisisTalkLinesData = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const data = [];
            const firestore = getFirestore();
            firestore.collection('crisisTalkLines').get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    data.push(doc.data());
                });
            }).then(() => {
                dispatch({type: 'GET_CRISIS_TALK_LINES_RESOURCE', data})
            });
        } catch(err) {
            console.log(err);
        };
    };
};

export const EventsData = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const data = [];
            const firestore = getFirestore();
            const event = firestore.collection('events').orderBy('timestamp','desc').get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    data.push(doc.data());
                });
            }).then(() => {
                dispatch({type: 'GET_EVENTS_DATA', data})
            });
        } catch(err) {
            console.log(err);
        };
    };
};

export const MapResourcesData = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const data = [];
            const firestore = getFirestore();
            firestore.collection('localResources').get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    data.push(doc.data());
                });
            }).then(() => {
                dispatch({type: 'GET_MAP_RESOURCE_DATA', data})
            });
        } catch(err) {
            console.log(err);
        };
    };
};
