import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createMessage } from '../../Store/Actions/messageAction'

const MessageForm = (props) => {

    const [message, setMessage] = useState({
        text: ''
    })

    const onInputChange = (e) => { 
        setMessage({...message, [e.target.name]: e.target.value }) 
    };

    const sendMessage = (e) => {
        e.preventDefault()
        props.createMessage(message)
    }

    return (
        <>
        <form onSubmit={(e) => sendMessage(e)}>
           <input type='text' name="text" placeholder="message" onChange={(e) => onInputChange(e)}/>
           <button>send</button>
       </form>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createMessage: (message) => dispatch(createMessage(message))
    }
}

export default connect(null, mapDispatchToProps)(MessageForm)
