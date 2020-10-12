import React from 'react'
import { withRouter } from 'react-router-dom'

import {
    Ul,
    Li,
    Div,
    P
} from './style'

const List = (props) => {
    console.log(props, 'this is props')
    return (
        <Ul>
        {
            props.resources.map((resource, index) => {
                return (
                    <Li key={index}>
                        <Div className='div-date'>
                            <P className='p-date'>{resource.date}</P>
                            <P className='p-date'>{resource.time}</P>
                        </Div>
                        <Div className='div-info'>
                            <P>{resource.name}</P>
                            <P>{resource.city}</P>
                            <P>{resource.address}</P>
                        </Div>
                    </Li>
                )
            })
        }
        </Ul>
    )
}

export default withRouter(List)
