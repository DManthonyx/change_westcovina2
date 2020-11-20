import React from 'react'
import { withRouter } from 'react-router-dom'

import {
    Ul,
    Li,
    Div,
    P
} from './style'

const List = (props) => {
    return (
        <Ul>
        {
            props.events && props.events.map((event, index) => {
                return (
                    <Li key={index}>
                        <Div className='div-date'>
                            <P className='p-date'>{event.month + 1}.{event.day}.{event.year.toString().slice(2)}</P>
                            <P className='p-date'>{event.time}</P>
                        </Div>
                        <Div className='div-info'>
                            <P>{event.name}</P>
                            <P>{event.city}</P>
                            <P>{event.address}</P>
                        </Div>
                    </Li>
                )
            })
        }
        </Ul>
    )
}

export default withRouter(List)
