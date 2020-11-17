import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { CreateUser  } from '../../Store/Actions/authActions'

import {
    Main,
    Section,
    SecWrapper,
    SecDiv,
    InvolvedImg,
    InvolvedH2,
    InvolvedP,
    InvolvedBtn,
    H1,
    H2,
    H3,
    Button,
    Btn,
    SignUpBtn,
    PostImg,
    PostP,
    Div,
    EmailP,
    P,
    Img,
    Form,
    Input,
    Span,
    BlurDiv,
    ResourceDiv,
    ResourceDivInner,
    A
} from './style'

const Home = (props) => {
    const [email, setEmail] = useState('')
    const submit = (e) => {
        e.preventDefault()
        const emailCorrect = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/
        console.log(email)
        if(email.search(emailCorrect) === -1) {
        } else {
            props.createUser({email})
        }
    }
    return (
        <Main>
            <Section>
                <BlurDiv>
                    <H1>We Must Be the <Span>Change</Span> We Want to<br />See in <Span>West Covina</Span></H1>
                </BlurDiv>
                <Button>JOIN US</Button>
            </Section>
            <Section>
                <Div>
                    <H3>JOIN OUR EMAIL LIST</H3>
                    <EmailP>Stay up to date with issues affecting our community of <br /> West Covina, and learn about how we can make a <br /> positive difference together.</EmailP>
                </Div>
                <Div>
                    <Form onSubmit={submit}>
                        <Input type="text" name="email" placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)}/>
                        <SignUpBtn>SIGN UP</SignUpBtn>
                    </Form>
                </Div>
            </Section>
            <Section>
                <H2>GET INVOLVED</H2>
                <SecWrapper>
                    <SecDiv>
                        <InvolvedImg src="https://i.imgur.com/BwfJCky.png" />
                        <InvolvedH2>Events</InvolvedH2>
                        <InvolvedP>Join us in making an impact in West Covina through various volunteer and direct action events</InvolvedP>
                        <InvolvedBtn><A exact to='/updates'>SEE EVENTS</A></InvolvedBtn>
                    </SecDiv>
                    <SecDiv>
                        <InvolvedImg src="https://i.imgur.com/d0NMi5n.png" />
                        <InvolvedH2>CITY COUNCIL MEETINGS</InvolvedH2>
                        <InvolvedP>Read our Peoples’ Agenda and participate in local government by making your voice heard</InvolvedP>
                        <InvolvedBtn><A exact to='/updates'>LEARN MORE</A></InvolvedBtn>
                    </SecDiv>
                    <SecDiv>
                        <InvolvedImg className='third' src="https://i.imgur.com/LbrkAFU.png" />
                        <InvolvedH2>SLACK CONVERSATION</InvolvedH2>
                        <InvolvedP>Get and stay connected with Change West Covina by joining the conversation on Slack</InvolvedP>
                        <InvolvedBtn><A exact to='/'>SLACK INFO</A></InvolvedBtn>
                    </SecDiv>
                </SecWrapper>
            </Section>
            <Section>
                <ResourceDiv>
                    <ResourceDivInner>
                        <H2 className='sec4-h2'>FIND WHAT YOU NEED</H2>
                        <P>Check out our extensive list of resources to  locate local businesses, organizations, and services to help you live your life to the fullest. </P>
                        <Btn><A exact to='/resources'>RESOURCES</A></Btn>
                    </ResourceDivInner>
                </ResourceDiv>
                <ResourceDiv>
                    <Img src="https://i.imgur.com/5pYWRym.png" title="West Covina Map" />
                </ResourceDiv>
            </Section>
            <Section>
                <H2>RECENT POSTS</H2>
                <SecWrapper className='posts-wrapper'>
                    <SecDiv className='post-div'>
                        <PostImg src="https://i.imgur.com/cjulNMW.png" />
                        <PostP>West Covina District 1<br /> Candidate Forum</PostP>
                    </SecDiv>
                    <SecDiv className='post-div'>
                    <PostImg src="https://i.imgur.com/cjulNMW.png" />
                        <PostP>What You Need To Know About<br />  Census 2020</PostP>
                    </SecDiv>
                    <SecDiv className='post-div'>
                    <PostImg src="https://i.imgur.com/cjulNMW.png" />
                        <PostP>How Can We Invest in Our<br />  Community?</PostP>
                    </SecDiv>
                </SecWrapper>
                <Btn className='post-btn'><A exact to='/updates'>READ MORE</A></Btn>
            </Section>
        </Main>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (creds) => dispatch(CreateUser(creds)),

    }
}


export default withRouter(connect(null, mapDispatchToProps)(Home))