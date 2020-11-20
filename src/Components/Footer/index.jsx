import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { CreateUser  } from '../../store/actions/authActions';


import {
    Wrapper,
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
    Form,
    Btn
} from './style';

const Footer = (props) => {
    const [email, setEmail] = useState('');
    const submit = (e) => {
        e.preventDefault();
        const emailCorrect = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/;
        if(email.search(emailCorrect) === -1) {
        } else {
            props.createUser({email});
        }
    }
    return (
        <div style={{display: "block"}}>
        <Wrapper>
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
                <Img src='https://i.imgur.com/7cpYYcK.png' title='West Covina' />
            </Sec>
            <Sec>
                <SocialWrapper>
                    <SocialDiv>
                        <P className='soc-p'>Change West Covina</P>
                    </SocialDiv>
                    <SocialDiv>
                        <SocialLink to='/'>
                            <SocialImg src='https://i.imgur.com/32wQeQq.png' />
                        </SocialLink>
                        <SocialLink to='/'>
                            <SocialImg src='https://i.imgur.com/xFImnke.png'/>
                        </SocialLink>
                        <SocialLink to='/'>
                            <SocialImg src='https://i.imgur.com/486JE5L.png'/>
                        </SocialLink>
                    </SocialDiv>
                </SocialWrapper>
                <SocialWrapper>
                    <P>Join our Email List! </P>
                    <Form onSubmit={submit}>
                        <Input type="text" name="email" placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)}/>
                        <Btn>SIGN UP</Btn>
                    </Form>
                </SocialWrapper>
            </Sec> 
        </Wrapper>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (creds) => dispatch(CreateUser(creds)),

    };
};


export default withRouter(connect(null, mapDispatchToProps)(Footer));