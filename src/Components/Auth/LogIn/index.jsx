import React, { useState } from 'react'
import { connect } from 'react-redux'
import { SignIn } from '../../../Store/Actions/authActions'
import { withRouter } from 'react-router-dom'


import {
    Main
} from './style'

const LogIn = (props) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const signIn = (e) => {
        e.preventDefault()
        props.signIn(user)
    }

    const onInputChange = (e) => { 
        setUser({...user, [e.target.name]: e.target.value }) 
   };


    return (
        <Main>
            <form onSubmit={(e) => signIn(e)}>
                <input type='text' name="email" placeholder="email" onChange={(e) => onInputChange(e)}/>
                <input type='text' name="password" placeholder="password" onChange={(e) =>onInputChange(e)}/>
                <button>sign in</button>
                {props.authError}
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
        signIn: (creds) => dispatch(SignIn(creds))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn))