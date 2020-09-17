import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CreateArticle } from '../../Store/Actions/articleAction'
import { Controller, useForm } from 'react-hook-form'

import {
    TextField,
} from '@material-ui/core';

const Form = (props) => {

    const { register, handleSubmit, errors, watch } = useForm();

    const submit = (data) => {
        props.createArticle(data)
    }

    return (
        <> 
        <form onSubmit={handleSubmit(submit)}>
            <TextField
                autoComplete='title'
                type='text'
                name='title'
                error={!!errors.title}
                inputRef={register({
                    required: {
                        value: true,
                        message: 'must have title'
                    },
                })}
                label='title'
                variant="outlined"
                helperText={!!errors.title ? errors.title.message : ''}
            />
            <TextField
                autoComplete='body'
                type='text'
                name='body'
                error={!!errors.body}
                inputRef={register({
                    required: {
                        value: true,
                        message: 'must have text'
                    },
                })}
                label='body'
                variant="outlined"
                helperText={!!errors.body ? errors.body.message : ''}
            />
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

export default connect(null, mapDispatchToProps)(Form)
