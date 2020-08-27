import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.div`
  background-color: ${props => props.color ? props.color : "black"};
  position: absolute;
  z-index: 100;
  width: 100%;
`

// export const NavRowContainer = styled.div`
//   width: 100%;
// `

export const NavRow = styled.div`
  padding: 10px 0;
  text-align: right;
  margin-right: 21px;
  @media (max-width: 950px) {
    a {
      display:none;
    }
  }
`

export const Link = styled(NavLink)`
  display:inline-block;
  text-decoration: none;
  padding: 15px;
  text-transform: uppercase;
  color: black;
  &:hover {
   
  }
  &.active{
    border-bottom: 1px solid black;
    transform: scale(1.5);
    color: #f5c303;
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

