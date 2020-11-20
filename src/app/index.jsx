import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// redux
import { connect } from 'react-redux';
import { InitApp } from '../store/actions/initActions';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Updates from '../pages/Updates';
import Resources from '../pages/Resources';
import GetConnected from '../pages/GetConnected';
import Articles from '../pages/Articles';
import My404 from '../pages/My404';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


// styles
import {
    PageWrapper,
    ContentWrapper,
    Section
} from './style';

const App = ({location,  initApp}) => {

    useEffect(() => {
        initApp()
    },[initApp]);

    return (
        <PageWrapper className='page-wrapper'>
        <Header />
        <ContentWrapper className='content-wrapper'>
        <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames="fade">
        <Section className="route-section">
        <ScrollToTop>
        <Switch>
            <Route path='/home' render={() => <Home /> }  />
            <Route path='/who-we-are' render={() => <About />}  />
            <Route path='/updates' render={() => <Updates />}  />
            <Route path='/resources' render={() => <Resources />}  />
            <Route path='/get-connected' render={() => <GetConnected />}  />
            <Route path='/articles' render={() => <Articles />}  />
            <Route component={ My404 } />
        </Switch>
        </ScrollToTop>
        </Section>
        </CSSTransition>
        </TransitionGroup>
        </ContentWrapper>
        <Footer />
        </PageWrapper>
    )
};

const mapStateToProps = (state) => {
    return {
        state: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initApp: () => dispatch(InitApp()),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

