import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: .9em;
  font-family: Manrope;
  display:inline-block;
  text-decoration: none;
  padding: 15px;
  text-transform: uppercase;
  color: ${props => props.ishome === 'true' ? 'white' : 'black'};
  &:hover {

  }
  &.active{
    border-bottom: 3px solid #EE8C3A;
  }
`;

export const Div = styled.div`

`;