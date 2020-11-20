import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import Hamburger from '../Hamburger';
import NavBar from '../NavBar';

// helpers
import { ROUTES } from '../../helpers/const';


// style
import {
    Wrapper,
    NavContainer,
    Div,
    Overlay,
    Ul,
    Li,
    HamLink,
    Logo,
    Link,
    Icon,
} from './style';


const Header = (props) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isHome, setIsHome ] = useState('false');

  useEffect(() => {
    let { pathname } = props.location;
    if(pathname === '/') {
      setIsHome('true')
    } else {
      setIsHome('false')
    }
  },[props.location]);

  window.onresize = () =>  (window.innerWidth > 900 && isOpen) && setIsOpen(false);

  return (
    <Wrapper>
        <NavContainer>
            <Div className='nav-row-left'>
                <Logo src="https://i.imgur.com/7cpYYcK.png"  title="Change West Covina logo"/>
            </Div>
            <Div className='nav-row-mid'>
                <NavBar isHome={isHome}/>
            </Div>
            <Div className='nav-row-right'>
                <Link className='social-link' to='/'>
                    <Icon src='https://i.imgur.com/32wQeQq.png' />
                </Link>
                <Link className='social-link' to='/'>
                    <Icon src='https://i.imgur.com/xFImnke.png'/>
                </Link>
                <Link className='social-link' to='/'>
                    <Icon src='https://i.imgur.com/486JE5L.png'/>
                </Link>
            </Div>
            <Hamburger setIsOpen={setIsOpen} isOpen={isOpen}/>
        </NavContainer>
        <Overlay className={isOpen ? "show" : "hide"}>
            <Ul>
                {
                    ROUTES.map((route, i) =>
                    <Li onClick={() => setIsOpen(!isOpen)} key={i}>
                        <HamLink to={`/${route}`}>{route}</HamLink>
                    </Li>
                    )
                }
            </Ul>
        </Overlay>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    //isLogged: !state.firebase.auth.isEmpty
  };
};

export default withRouter(connect(mapStateToProps, null)(Header));