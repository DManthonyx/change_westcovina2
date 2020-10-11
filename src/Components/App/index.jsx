import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'

// import { withFirebase } from '../Firebase'

import NavBar from '../NavBar';
import Home from '../Home';
import About from '../About';
import Article from '../Article';
import Resources from '../Resources';
import SignUp from '../Auth/SignUp';
import LogIn from '../Auth/LogIn';

import {
    PageWrapper,
    ContentWrapper,
    Section
} from './style'
import { UserDetail } from 'styled-icons/boxicons-solid';



const My404 = () => {
    if(true) {
      return  <Redirect to="/home" />
    }
};
   

const App = ({ location }) => {

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        console.log(true)
    },[])

    return (
        <PageWrapper>
            <NavBar />
            <ContentWrapper>
            <TransitionGroup className="transition-group">
            <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames="fade">
            <Section className="route-section">
            <Switch>
                <Route exact path='/' render={() => <Home /> }  />
                <Route exact path='/home' render={() => <Home /> }  />
                <Route exact path='/about' render={() => <About />}  />
                <Route exact path='/article' render={() => <Article />}  />
                <Route exact path='/resources' render={() => <Resources />}  />
                <Route exact path='/signup' render={() => <SignUp />}  />
                <Route exact path='/login' render={() => <LogIn />}  />
                <Route component={ My404 } />
            </Switch>
            </Section>
            </CSSTransition>
            </TransitionGroup>
            </ContentWrapper>
        </PageWrapper>
    )   
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authState: () => dispatch()
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))


