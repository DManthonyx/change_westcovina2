import React from 'react'
import { withRouter } from 'react-router-dom';

import {
    Footerr,
    Sec,
    Div,
    Ul,
    Li,
    Img,
    SocialWrapper,
    SocialDiv,
    SocialImg,
    SocialLink,
    P,
    Input,
    InputDiv,
    Btn
} from './style'

const Footer = () => {
    return (
        <Footerr>
            <Sec>
                <Div>
                    <Ul>
                        <Li>Who We Are</Li>
                        <Li>Guiding Principles</Li>
                        <Li>In the News</Li>
                    </Ul>
                </Div>
                <Div>
                    <Ul>
                        <Li>Updates</Li>
                        <Li>Events</Li>
                        <Li>In Our Words</Li>
                        <Li>City Council Meetings</Li>
                    </Ul>
                </Div>
                <Div>
                    <Ul>
                        <Li>Get Connected</Li>
                        <Li>Social Media</Li>
                        <Li>Slack</Li>
                        <Li>Email List</Li>
                    </Ul>
                </Div>
            </Sec>
            <Sec>
                <Img src='https://i.imgur.com/xiRCnx3.png' title='West Covina' />
            </Sec>
            <Sec>
                <SocialWrapper>
                    <SocialDiv>
                        <P className='soc-p'>Change West Covina</P>
                    </SocialDiv>
                    <SocialDiv>
                        <SocialLink exact to='/'>
                            <SocialImg src='https://i.imgur.com/32wQeQq.png' />
                        </SocialLink>
                        <SocialLink exact to='/'>
                            <SocialImg src='https://i.imgur.com/xFImnke.png'/>
                        </SocialLink>
                        <SocialLink exact to='/'>
                            <SocialImg src='https://i.imgur.com/486JE5L.png'/>
                        </SocialLink>
                    </SocialDiv>
                </SocialWrapper>
                <SocialWrapper>
                    <P>Join our Email List! </P>
                    <InputDiv>
                        <Input type='text' placeholder='Enter email address' />
                        <Btn>SIGN UP</Btn>
                    </InputDiv>
                </SocialWrapper>
            </Sec>
        </Footerr>
    )
}

export default withRouter(Footer)