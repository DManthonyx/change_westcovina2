import React, { useState } from 'react'
import { connect } from 'react-redux'
import { SignIn } from '../../../Store/Actions/authActions'
import { withRouter } from 'react-router-dom'

import {
    Main,
    SignupLink
} from './style'

const LogIn = (props) => {


    const submit = (data) => {
        props.signIn(data)
    }
    
    return (
        <Main>

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