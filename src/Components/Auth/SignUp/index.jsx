import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignUp } from '../../../Store/Actions/authActions'

import {
    Main
} from './style'


const CreateUser = (props) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const submit = (e) => {
        e.preventDefault()
        props.signUp(user)
    }

     const onInputChange = (e) => { 
         setUser({...user, [e.target.name]: e.target.value }) 
    };

    return (
        <Main>
            <form onSubmit={(e) => submit(e)}>
                <input type='text' name="email" placeholder="email" onChange={(e) => onInputChange(e)}/>
                <input type='text' name="password" placeholder="password" onChange={(e) =>onInputChange(e)}/>
                <button>sign up</button>
            </form>
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
        signUp: (creds) => dispatch(SignUp(creds))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateUser))