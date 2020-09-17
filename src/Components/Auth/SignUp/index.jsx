import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignUpEmailPassword } from '../../../Store/Actions/authActions'
import { Controller, useForm } from 'react-hook-form'

import {
    TextField,
} from '@material-ui/core';


import {
    Main,
    LoginLink
} from './style'


const CreateUser = (props) => {

    const { register, handleSubmit, errors, watch } = useForm();

    const submit = (data) => {
        props.signUpEmailPassword(data)
    }

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
                type='password'
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
            <TextField
                autoComplete='password'
                type='password'
                name='confirmPassword'
                error={!!errors.confirmPassword}
                inputRef={register({
                    required: true, 
                    validate: {
                        isMatching: (value) => value === watch('password'),
                    },
                })}
                label='confirm password'
                variant="outlined"
                helperText={!!errors.confirmPassword ? 'passwords must match' : ''}
            />
                <button>sign up</button>
            </form>
            <LoginLink exact to='/login'>Login</LoginLink>
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
        signUpEmailPassword: (creds) => dispatch(SignUpEmailPassword(creds))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateUser))