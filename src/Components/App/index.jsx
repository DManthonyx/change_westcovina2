import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withFirebase } from '../Firebase'


import NavBar from '../NavBar';
import Home from '../Home';
import About from '../About';
import News from '../News';
import Resources from '../Resources';
import SignUp from '../Auth/SignUp';
import LogIn from '../Auth/LogIn';

import {
    PageWrapper,
    ContentWrapper
} from './style'



const My404 = () => {
    if(true) {
      return  <Redirect to="/home" />
    }
};
   

const App = ({ location }) => {
    return (
        <PageWrapper>
            <NavBar />
            <ContentWrapper>
            <TransitionGroup className="transition-group">
            <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames="fade">
            <section className="route-section">
            <Switch>
                <Route exact path='/' render={() => <Home /> }  />
                <Route exact path='/home' render={() => <Home /> }  />
                <Route exact path='/about' render={() => <About />}  />
                <Route exact path='/news' render={() => <News />}  />
                <Route exact path='/resources' render={() => <Resources />}  />
                <Route exact path='/signup' render={() => <SignUp />}  />
                <Route exact path='/login' render={() => <LogIn />}  />
                <Route component={ My404 } />
            </Switch>
            </section>
            </CSSTransition>
            </TransitionGroup>
            </ContentWrapper>
        </PageWrapper>
    )   
}

export default withRouter(withFirebase(App))


