import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Hamburger from '../Hamburger'
import { signedInRoutes } from '../../Const'
import { signedOutRoutes } from '../../Const'



import { connect } from 'react-redux'
import { SignOut } from '../../Store/Actions/authActions'
import { CheckAuthState } from '../../Store/Actions/authActions'

import { 
    NavContainer,
    NavRow,
    Ul,
    Li,
    Link,
    HamLink,
    LogOutLink,
    LogOutHamLink,
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
    props.checkAuthState()
  })

  window.onload = () => (setTimeout(() => setIsHidden(true), 3000))

  window.onresize = () =>  (window.innerWidth > 900 && isOpen) && setIsOpen(false)

  return (
      <NavContainer color={"white"} visible={isHidden}>
      <NavRow>
          <NavRowLeft>
              {/* <Logo src="https://i.imgur.com/RMl2laN.jpg" /> */}
              {/* <Title>Change West Covina</Title> */}
          </NavRowLeft>
          <NavRowRight>
          {
            props.isLogged 
            ?
            <Div>
              {
                signedInRoutes.map((route, i) =>
                <Link exact to={`/${route}`} key={i}>{route}</Link>
                ) 
              }
              <LogOutLink exact to={'/home'} onClick={props.signOut}>Logout</LogOutLink>
            </Div>
              :
            <Div>
              {
                signedOutRoutes.map((route, i) =>
                <Link exact to={`/${route}`} key={i}>{route}</Link>
                ) 
              }
            </Div>
          }    
          </NavRowRight>
        <Hamburger setIsOpen={setIsOpen} isOpen={isOpen}/>
      </NavRow>
      <Overlay className={isOpen ? "show" : "hide"}>
        <Ul>
          { 
            props.isLogged 
            ?
            <Div>
              {
                signedInRoutes.map((route, i) =>
                  <Li onClick={() => setIsOpen(!isOpen)} key={i}>
                    <HamLink exact to={`/${route}`}>{route}</HamLink>
                  </Li>
                )
              }
                  <Li>
                    <LogOutHamLink exact to={'/home'} onClick={props.signOut}>Logout</LogOutHamLink>
                  </Li>
            </Div>
              :
            <Div>
              {
                signedOutRoutes.map((route, i) =>
                <Li onClick={() => setIsOpen(!isOpen)} key={i}>
                  <HamLink exact to={`/${route}`}>{route}</HamLink>
                </Li>
                ) 
              }
            </Div>
          }    
        </Ul>
      </Overlay>
    </NavContainer>
  )
}

const mapStateToProps = (state) => {
  console.log(state, 'this is state nav')
  return {
    isLogged: !state.firebase.auth.isEmpty
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(SignOut()),
    checkAuthState: () => dispatch(CheckAuthState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))