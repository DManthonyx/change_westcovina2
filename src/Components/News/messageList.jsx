import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect }  from 'react-redux'
import { compose }  from 'redux'

const MessageList = (props) => {
    return (
        <>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state.firestore.data)
    return {
       messages: state.firestore.data
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'messages'}
    ])
)(MessageList)