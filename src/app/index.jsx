import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import ScrollToTop from '../components/ScrollToTop';

import { InitApp } from '../store/Actions/initActions';

// Pages
import Header from '../pages/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Updates from '../pages/Updates';
import Resources from '../pages/Resources';
import GetConnected from '../pages/GetConnected';
import Article from '../pages/Article';
import My404 from '../pages/My404';

import {
    PageWrapper,
    ContentWrapper,
    Section
} from './style';

const App = ({location,  initApp}) => {
    console.log(initApp, 'hit <<<')
    useEffect(() => {
        initApp()
    },[initApp]);

    return (
        <PageWrapper>
        <Header />
        <ContentWrapper>
        <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames="fade">
        <Section className="route-section">
        <ScrollToTop>
        <Switch>
            <Route path='/' render={() => <Home /> }  />
            <Route path='/who-we-are' render={() => <About />}  />
            <Route path='/updates' render={() => <Updates />}  />
            <Route path='/resources' render={() => <Resources />}  />
            <Route path='/get-connected' render={() => <GetConnected />}  />
            <Route path='/article' render={() => <Article />}  />
            <Route component={ My404 } />
        </Switch>
        </ScrollToTop>
        <Footer />
        </Section>
        </CSSTransition>
        </TransitionGroup>
        </ContentWrapper>
        </PageWrapper>
    )
};

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        state: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initApp: () => dispatch(InitApp()),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

