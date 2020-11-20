import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    Ul,
    Li,
    Div,
    P
} from './style';

const event = 'event';

const List = (props) => {
    

    return (
        <Ul>
            {
                props & props.type === event ?
                    props.data && props.data.map((ele, index) => {
                        return (
                            <Li key={index}>
                                <Div className='div-date'>
                                    <P className='p-date'>{ele.month + 1}.{ele.day}.{ele.year.toString().slice(2)}</P>
                                    <P className='p-date'>{ele.time}</P>
                                </Div>
                                <Div className='div-info'>
                                    <P>{ele.name}</P>
                                    <P>{ele.city}</P>
                                    <P>{ele.address}</P>
                                </Div>
                            </Li>
                        )
                    })
                :
                props.data && props.data.map((ele, index) => {
                    return (
                        <Li className='li-res' key={index}>
                            <Div className='res'>
                                <P className='p-res'>{ele.name}</P>
                                <P className='p-res'>{ele.address}</P>
                                <P className='p-res'>{ele.city} {ele.zipCode}</P>
                                <P className='p-res'>{ele.number}</P>
                            </Div>
                        </Li>
                    )
                })
            }
        </Ul>
    );
};

export default withRouter(List);
