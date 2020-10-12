import React from 'react'
import { withRouter } from 'react-router-dom'
import Calendar from '../Calender'
import List from '../List'
import { resources } from '../../Const/resources'

import {
    Main,
    Section,
    Title,
    Div,
    H2
} from './style'
const Updates = () => {
    return (
        <Main>
            <Title>Updates</Title>
            <Section>
                <Div className='div-calendar'>
                    <Calendar />
                    <H2>Join Us!</H2>
                </Div>
                <Div>
                    <List resources={resources}/>
                </Div>
            </Section>
        </Main>
    )
}

export default withRouter(Updates)