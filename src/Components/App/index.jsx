import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import ScrollToTop from '../ScrollToTop';

import { CommunityData } from '../../Store/Actions/resourceActions';
import { MapResourcesData } from '../../Store/Actions/resourceActions';
import { EventsData } from '../../Store/Actions/resourceActions';
import { AbuseData } from '../../Store/Actions/resourceActions';
import { CrisisInterventionData } from '../../Store/Actions/resourceActions';
import { CrisisTalkLinesData } from '../../Store/Actions/resourceActions';
import { GetAllUsers  } from '../../Store/Actions/authActions';
import { GetAllArticles  } from '../../Store/Actions/articleActions';

import NavBar from '../NavBar';
import Footer from '../Footer';
import Home from '../Home';
import About from '../About';
import Article from '../Article';
import Resources from '../Resources';
import Updates from '../Updates';
import Media from '../Media';
import SignUp from '../Auth/SignUp';
import LogIn from '../Auth/LogIn';
import Admin from '../Admin';

import {
    PageWrapper,
    ContentWrapper,
    Section
} from './style';

const My404 = () => {
    if(true) {
      return  <Redirect to="/home" />
    };
};


const App = ({location, communityData, abuseData, crisisInterventionData, crisisTalkLinesData, getAllUsers, getEvents, mapData, getAllArticles}) => {

    useEffect(() => {
        communityData();
        mapData();
        abuseData();
        crisisInterventionData();
        crisisTalkLinesData();
        getAllUsers();
        getEvents();
        getAllArticles();
    },[communityData, mapData, abuseData, crisisInterventionData, crisisTalkLinesData, getAllUsers, getEvents, getAllArticles]);

    return (
        <PageWrapper>
        <NavBar />
        <ContentWrapper>
        <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames="fade">
        <Section className="route-section">
        <ScrollToTop>
        <Switch>
            <Route exact path='/' render={() => <Home /> }  />
            <Route exact path='/home' render={() => <Home /> }  />
            <Route exact path='/who we are' render={() => <About />}  />
            <Route exact path='/article' render={() => <Article />}  />
            <Route exact path='/resources' render={() => <Resources />}  />
            <Route exact path='/updates' render={() => <Updates />}  />
            {/* <Route exact path='/get connected' render={() => <Media />}  /> */}
            <Route exact path='/signup' render={() => <SignUp />}  />
            <Route exact path='/login' render={() => <LogIn />}  />
            <Route exact path='/admin' render={() => <Admin />}  />
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
        authState: () => dispatch(),
        communityData: () => dispatch(CommunityData()),
        mapData: () => dispatch(MapResourcesData()),
        abuseData: () => dispatch(AbuseData()),
        crisisInterventionData: () => dispatch(CrisisInterventionData()),
        crisisTalkLinesData: () => dispatch(CrisisTalkLinesData()),
        getAllUsers: () => dispatch(GetAllUsers()),
        getEvents: () => dispatch(EventsData()),
        getAllArticles: () => dispatch(GetAllArticles())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

