import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Hamburger from '../Hamburger'
import { ROUTES } from '../../Const'



import { connect } from 'react-redux'
// import { SignOut } from '../../Store/Actions/authActions'
// import { CheckAuthState } from '../../Store/Actions/authActions'

import { 
    NavContainer,
    NavRow,
    Ul,
    Li,
    Link,
    HamLink,
    Overlay,
    Logo,
    NavRowLeft,
    NavRowRight,
    Title,
    Div
   } from './style'


const NavBar = (props) => {

  const [ isOpen, setIsOpen ] = useState(false)
  const [ isHidden, setIsHidden ] = useState(false)

  const load = () => {
      setTimeout(() => setIsHidden(true), 3000)
  }

  useEffect(() => {
    //props.checkAuthState()
  })

  window.onload = () => (setTimeout(() => setIsHidden(true), 3000))

  window.onresize = () =>  (window.innerWidth > 900 && isOpen) && setIsOpen(false)

  return (
      <NavContainer color={"white"} visible={isHidden}>
      <NavRow>
          <NavRowLeft>
            <Logo src="https://i.imgur.com/xiRCnx3.png"  title="Change West Covina logo"/>
          </NavRowLeft>
          <NavRowRight>
          <Div>
              {
                ROUTES.map((route, i) =>
                <Link exact to={`/${route}`} key={i}>{route}</Link>
                ) 
              }
          </Div>
          </NavRowRight>
        <Hamburger setIsOpen={setIsOpen} isOpen={isOpen}/>
      </NavRow>
      <Overlay className={isOpen ? "show" : "hide"}>
        <Ul>
        <Div>
            {
              ROUTES.map((route, i) =>
                <Li onClick={() => setIsOpen(!isOpen)} key={i}>
                  <HamLink exact to={`/${route}`}>{route}</HamLink>
                </Li>
              )
            }
          </Div>
        </Ul>
      </Overlay>
    </NavContainer>
  )
}

const mapStateToProps = (state) => {
  console.log(state, 'this is state nav')
  return {
    //isLogged: !state.firebase.auth.isEmpty
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // signOut: () => dispatch(SignOut()),
    // checkAuthState: () => dispatch(CheckAuthState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))