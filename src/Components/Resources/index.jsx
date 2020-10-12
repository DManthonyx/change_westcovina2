import React from 'react'
import MapBox from '../MapBox'
import List from '../List'
import { resources } from '../../Const/resources'

import {
    Main,
    Section,
    Title,
    Div
} from './style'
import Mapbox from '../MapBox'

const Resources = () => {
    return (
        <Main>
            <Title>Resources</Title>
            <Section>
                <Div class='div-mapbox'>
                    <Mapbox resources={resources}/>
                </Div>
                <Div>
                    <List resources={resources}/>
                </Div>
            </Section>
        </Main>
    )
}

export default Resources