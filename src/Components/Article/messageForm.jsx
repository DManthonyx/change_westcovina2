import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CreateArticle } from '../../Store/Actions/messageAction'

const MessageForm = (props) => {

    const [article, setMessage] = useState({
        text: ''
    })

    const onInputChange = (e) => { 
        setMessage({...article, [e.target.name]: e.target.value }) 
    };

    const sendMessage = (e) => {
        e.preventDefault()
        props.createArticle(article)
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
        createArticle: (article) => dispatch(CreateArticle(article))
    }
}

export default connect(null, mapDispatchToProps)(MessageForm)
