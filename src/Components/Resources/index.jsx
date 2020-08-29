import React from 'react'
import MapBox from '../MapBox'
import { resources } from '../../Const/resources'

import {
    Main,
    Section,
    ListDiv,
    H1,
    Ul,
    Li
} from './style'
import Mapbox from '../MapBox'

const Resources = () => {
    return (
        <Main>
            <Section>
                <Mapbox resources={resources}/>
            </Section>
            <Section>
                <ListDiv>
                    <H1>Resources</H1>
                    <Ul>
                        {resources.map((resource, index) => {
                            return (
                                <Li key={index}>
                                    <h2>{resource.name}</h2>
                                    <p>{resource.address}</p>
                                    <p>{resource.city}</p>
                                    <p>{resource.zipCode}</p>
                                    <p>{resource.phoneNumber}</p>
                                </Li>
                            )
                        })}
                    </Ul>
                </ListDiv>
            </Section>
        </Main>
    )
}

export default Resources