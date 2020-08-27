import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from '../Const'

export const NavContainer = styled.div`
  background-color: ${props => props.color ? props.color : "black"};
  position: absolute;
  z-index: 100;
  width: 100%;
  visibility: hidden;
`

// export const NavRowContainer = styled.div`
//   width: 100%;
// `

export const NavRow = styled.div`
  padding: 10px;
  display: flex;
  @media (max-width: 950px) {
    a {
      display:none;
    }
  }
`

export const NavRowLeft = styled.div`
  display: flex;
  width: 50%;
`

export const NavRowRight = styled.div`
    width: 50%;
    text-align: right;
    padding-right: 86px;
`

export const Logo = styled.img`
    width: 100px;
    height: 80px;
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
  display:inline-block;
  text-decoration: none;
  padding: 15px;
  text-transform: uppercase;
  color: black;
  &:hover {
   
  }
  &.active{
    border-bottom: 3px solid ${colors.secondary};
    transform: scale(1.5);
    color: ${colors.main};
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

