import React from 'react'
import { withRouter } from 'react-router-dom'
import MapBox from '../MapBox'
import List from '../List'

import { resources } from '../../Const/resources'
import { connect } from 'react-redux'

import {
    Main,
    Section,
    Title,
    SubTitle,
    Div,
    P,
    Ul,
    Li,
    Span
} from './style'
import Mapbox from '../MapBox'

const Resources = (props) => {
    console.log(props, 'props')
    return (
        <Main>
            <Title>Resources</Title>
            <Section>
                <SubTitle>CITY RESOURCES</SubTitle>
                <Div className='div-resource'>
                    <Div className='div-mapbox'>
                        <Mapbox resources={resources}/>
                    </Div>
                    <Div className='div-list'>
                        <List resources={resources}/>
                    </Div>
                </Div>
            </Section>
            <Section>
                <SubTitle>TELEPHONE RESOURCES</SubTitle>
                <Div className='div-telephone'>
                    <SubTitle>COMMUNITY MEDIATION/DISPUTE RESOLUTION</SubTitle>
                    <P>Any individual, business, or organization residing, working, or operating in Los Angeles County is eligible to receive DRPA-funded mediation services at little or no cost. These services include time for conversation and collaboration, including merchant- customer, landlord-tenant, family, neighbor to neighbor, and debt disputes.</P>
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
                {/* <Div>
                    <SubTitle>CRISIS INTERVENTION</SubTitle>
                    <Ul>
                    </Ul>
                </Div>
                <Div>
                    <Div>

                    </Div>
                    <Div>

                    </Div>
                </Div> */}
            </Section>
        </Main>
    )
}

const mapStateToProps = (state) => {
    return {
      communityData: state.resource.communityResource,
      abuseData: state.resource.communityResource,
      crisisInterventionData: state.resource.crisisIntervention,
      crisisTalkLinesData: state.resource.crisisTalkLines
    }
}
 
export default withRouter(connect(mapStateToProps, null)(Resources))