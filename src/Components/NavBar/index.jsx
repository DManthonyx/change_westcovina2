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
    NavRowMid,
    NavRowRight,
    SocialLink,
    SocialIcon,
    Title,
    Div
   } from './style'


const NavBar = (props) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ isHidden, setIsHidden ] = useState(false)
  const [ isHome, setIsHome ] = useState('false')
  useEffect(() => {
    let location = props.location.pathname
    location === '/home' ? setIsHome('true') : setIsHome('false')

  })

  window.onresize = () =>  (window.innerWidth > 900 && isOpen) && setIsOpen(false)

  return (
      <NavContainer color={"white"} visible={isHidden}>
      <NavRow>
          <NavRowLeft>
            <Logo src="https://i.imgur.com/7cpYYcK.png"  title="Change West Covina logo"/>
          </NavRowLeft>
          <NavRowMid>
            <Div>
                {
                  ROUTES.map((route, i) =>
                    <Link ishome={isHome} exact to={`/${route}`} key={i}>{route}</Link>
                  ) 
                }
            </Div>
          </NavRowMid>
          <NavRowRight>
            <SocialLink exact to='/'>
              <SocialIcon src='https://i.imgur.com/32wQeQq.png' />
            </SocialLink>
            <SocialLink exact to='/'>
              <SocialIcon src='https://i.imgur.com/xFImnke.png'/>
            </SocialLink>
            <SocialLink exact to='/'>
              <SocialIcon src='https://i.imgur.com/486JE5L.png'/>
            </SocialLink>
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

export default withRouter(connect(mapStateToProps, null)(NavBar))