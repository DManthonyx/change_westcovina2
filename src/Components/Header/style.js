import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../helpers/const';

// cannot be namer Header because its being used in a Header component 
export const Wrapper = styled.header`
    position: absolute;
    padding-top: 34px;
    z-index: 1;
    width: 100%;
`

export const Div = styled.div`
    &.nav-row-left {
        display: flex;
        justify-content: end;
        margin-left: 10px;
        width: 25%;
    }
    &.nav-row-mid {
        display: flex;
        justify-content: center;
        width: 50%;
    }
    &.nav-row-right {
        display: flex;
        width: 25%;
        justify-content: flex-end;
    }
`

export const NavContainer = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    ${Div}  {
      display:none;
    }
  }
`;

export const Logo = styled.img`
  width: 88px;
  height: 84px;
  @media (max-width: 700px) {
    width: 78px;
    height: 64px;
  }
`

export const Title = styled.h1`
  font-size: 2.5em;
  color: ${colors.main};
  display: flex;
  align-items: center;
  padding-left: 42px;
`;


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
`;

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 9rem;
  transition: left .75s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  &.hide {
    display: none;
  }
  &.show {
    left: 0;
  }
  & > a {
    color: white;
  }
`;

export const Ul = styled.ul`
    padding-right: 10px;
    background: #ee8c3af2
`;

export const Li = styled.li`
    list-style: none;
`;

export const Link = styled(NavLink)`
    &.social-link {
        margin-right: 15px;
    }
`;

export const Icon = styled.img`

`;
