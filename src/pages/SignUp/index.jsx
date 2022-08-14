import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignUpEmailPassword } from '../../../Store/Actions/authActions'
import { Controller, useForm } from 'react-hook-form'


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