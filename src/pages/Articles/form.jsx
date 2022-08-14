import React from 'react'
import { connect } from 'react-redux'
import { CreateArticle } from '../../store/actions/articleActions'



const Form = (props) => {

    const submit = (data) => {
        props.createArticle(data)
    }

    return (
        <form onSubmit={submit}>
         
       </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createArticle: (article) => dispatch(CreateArticle(article))
    }
}

export default connect(null, mapDispatchToProps)(Form)
