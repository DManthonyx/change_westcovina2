import React, { useState } from 'react'
import Hamburger from '../Hamburger'

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
    Title
   } from './style'


const NavBar = ({routes = []}) => {

    const [ isOpen, setIsOpen ] = useState(false)

    window.onresize = () => (window.innerWidth > 900 && isOpen) && setIsOpen(false)

    return (
        <NavContainer color={"white"} display={""}>
        <NavRow>
            <NavRowLeft>
                <Logo src="https://i.imgur.com/RMl2laN.jpg" />
                {/* <Title>Change West Covina</Title> */}
            </NavRowLeft>
            <NavRowRight>
                {
                    routes.map((route, i) =>
                    <Link exact to={`/${route}`} key={i}>{route}</Link>
                    ) 
                }
            </NavRowRight>
          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen}/>
        </NavRow>
        <Overlay className={isOpen ? "show" : "hide"}>
          <Ul>
            {
              routes.map((route, i) =>
                <Li onClick={() => setIsOpen(!isOpen)} key={i}>
                  <HamLink exact to={`/${route}`}>{route}</HamLink>
                </Li>
              )
            }
          </Ul>
        </Overlay>
      </NavContainer>
    )
}

export default NavBar