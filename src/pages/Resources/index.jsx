import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import List from '../../components/List';
import { Mapbox } from '../../components/MapBox'

import {
    Main,
    Section,
    Title,
    SubTitle,
    ResTitle,
    Div,
    P,
    Ul,
    Li,
    Span
} from './style';

const Resources = (props) => {
    return (
        <Main>
            <Title>Resources</Title>
            <Section>
                <SubTitle>CITY RESOURCES</SubTitle>
                <Div className='div-resource'>
                    <Div className='div-mapbox'>
                        <Mapbox resources={props && props.mapData} />
                    </Div>
                    <Div className='div-list'>
                        <List data={props && props.mapData} type={'resource'}/>
                    </Div>
                </Div>
            </Section>
            <Section>
                <SubTitle>TELEPHONE RESOURCES</SubTitle>
                <Div className='div-telephone'>
                    <Div className='telephone-sub'>
                    <ResTitle>COMMUNITY MEDIATION/DISPUTE RESOLUTION</ResTitle>
                    <P className='res-info'>Any individual, business, or organization residing, working, or operating in Los Angeles County is eligible to receive DRPA-funded mediation services at little or no cost. These services include time for conversation and collaboration, including merchant- customer, landlord-tenant, family, neighbor to neighbor, and debt disputes.</P>
                    <Ul>
                        {
                            props.communityData && props.communityData.map((resource, index) => {
                                return (
                                <Li key={index}>{resource.name}<Span>{resource.number}</Span></Li>
                                )
                            })
                        }
                    </Ul>
                    </Div>
                </Div>
                <Div className='div-telephone'>
                    <Div className='telephone-sub'>
                    <ResTitle>CRISIS INTERVENTION</ResTitle>
                    <Ul className='ul-wrap'>
                        {
                            props.crisisInterventionData && props.crisisInterventionData.map((resource, index) => {
                                return (
                                <Li className='li-wrap' key={index}>{resource.name}<Span>{resource.number}</Span></Li>
                                )
                            })
                        }
                    </Ul>
                    </Div>
                </Div>
                <Div className='small-wrap'>
                    <Div className='small-div'>
                        <ResTitle>24/7 CRISIS TALKLINES</ResTitle>
                        <Ul className='ul-small'>
                            {
                                props.crisisTalkLinesData && props.crisisTalkLinesData.map((resource, index) => {
                                    return (
                                    <Li className='li-small' key={index}>{resource.name}<Span>{resource.number}</Span></Li>
                                    )
                                })
                            }
                        </Ul>
                    </Div>
                    <Div className='small-div'>
                        <ResTitle>REPORT ABUSE</ResTitle>
                        <Ul className='ul-small'>
                            {
                                props.abuseData && props.abuseData.map((resource, index) => {
                                    return (
                                    <Li className='li-small' key={index}>{resource.name}<Span>{resource.number}</Span></Li>
                                    )
                                })
                            }
                        </Ul>
                    </Div>
                </Div>
            </Section>
        </Main>
    );
};

const mapStateToProps = (state) => {
    return {
      communityData: state.resource.communityResource,
      abuseData: state.resource.communityResource,
      crisisInterventionData: state.resource.crisisIntervention,
      crisisTalkLinesData: state.resource.crisisTalkLines,
      mapData: state.resource.mapResources
    };
};

export default withRouter(connect(mapStateToProps, null)(Resources));