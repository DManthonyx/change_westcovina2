import React, { useState } from 'react'
import { connect } from 'react-redux'
import { SignIn } from '../../../Store/Actions/authActions'
import { withRouter } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'

import {
    TextField,
} from '@material-ui/core';

import {
    Main,
    SignupLink
} from './style'

const LogIn = (props) => {

    const { register, handleSubmit, errors } = useForm();

    const submit = (data) => {
        props.signIn(data)
    }
    console.log(errors, 'error')
    return (
        <Main>
            <form onSubmit={handleSubmit(submit)}>
            <TextField
                autoComplete='email'
                type='text'
                name='email'
                error={!!errors.email}
                inputRef={register({
                    required: true, 
                    pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                        message: 'email incorrect'
                    },
                })}
                label='email'
                variant="outlined"
                helperText={!!errors.email ? errors.email.message : ''}
            />
            <TextField
                autoComplete='password'
                type='text'
                name='password'
                error={!!errors.password}
                inputRef={register({
                    required: true, 
                    minLength: {
                        value: 6,
                        message: 'password must be at least 6 characters'
                    },
                })}
                label='password'
                variant="outlined"
                helperText={!!errors.password ? errors.password.message : ''}
            />
            <button>Login</button>
            </form>
            <SignupLink exact to='/signup'>Create Accout?</SignupLink>
        </Main>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(SignIn(creds))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn))