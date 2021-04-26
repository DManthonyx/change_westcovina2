import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CreateArticle } from '../../Store/Actions/articleActions'
import { Controller, useForm } from 'react-hook-form'



const Form = (props) => {

    const { register, handleSubmit, errors, watch } = useForm();

    const submit = (data) => {
        props.createArticle(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
         
       </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createArticle: (article) => dispatch(CreateArticle(article))
    }
}

export default connect(null, mapDispatchToProps)(Form)
