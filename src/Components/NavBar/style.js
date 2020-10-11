import styled,{ keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from '../../Const'

const transitionHomePage =  keyframes`
    0% { opacity: 0 }
    25% { opacity: .25 }
    50% { opacity: .5 }
    75% { opacity: .75 }
    100% { opacity: 1 }
`

export const NavContainer = styled.div`
  background-color: rgba(0,0,0,0);
  position: absolute;
  padding-top: 34px;
  z-index: 1;
  width: 100%;
`

// export const NavRowContainer = styled.div`
//   width: 100%;
// `

export const NavRow = styled.div`
  display: flex;
  @media (max-width: 950px) {
    a {
      display:none;
    }
  }
`

export const NavRowLeft = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
`

export const NavRowRight = styled.div`
  display: flex;
  width: 70%;
`

export const Logo = styled.img`
  width: 88px;
  height: 84px;
  position: relative;
  right: 60px;
`

export const Title = styled.h1`
  font-size: 2.5em;
  color: ${colors.main};
  display: flex;
  align-items: center;
  padding-left: 42px;
`

export const Link = styled(NavLink)`
  font-size: .9em;
  font-family: Manrope;
  display:inline-block;
  text-decoration: none;
  padding: 15px;
  text-transform: uppercase;
  color: black;
  &:hover {
   
  }
  &.active{
    border-bottom: 3px solid #000000;
  }
`

export const HamLink = styled(NavLink)`
  display:inline-block;
  text-decoration: none;
  padding: 15px;
  text-transform: uppercase;
  color: white;
  &:hover {
 
  }
  &.active{
    border-bottom: 1px solid #f5c303;
  }
  .show > &.active {
    border-bottom: none;
    color: gold;
  }
`

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0,0,0, 0.7);
  left: -120rem;
  transition: left .75s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  &.show {
    left: 0;
  }
  & > a {
    color: white;
  }
`

export const Ul = styled.ul`
  padding-right: 10px;
`

export const Li = styled.li`
  list-style: none;
`
export const Div = styled.div`
  position: relative;
  left: 55px;
`

