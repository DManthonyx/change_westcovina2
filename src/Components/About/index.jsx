import React from 'react';
import Footer from '../Footer'

import {
    Main,
    Section,
    Title,
    H1,
    H2,
    P,
    Img,
    Ul,
    Li,
    Div,
    Wrapper,
} from './style'


const About = () => {

    return (
        <Main>
            <Section>
                <Title>Who We Are</Title>
                <Wrapper>
                    <Div className='div-logo'>
                        <Img src='https://i.imgur.com/zSYDTxD.png'  title='Change West Covina'/>
                        <H1>Change West Covina</H1>
                    </Div>
                    <Div className='div-goals'>
                        <H2>OUR GOALS</H2>
                        <Ul>
                            <Li>Improve quality of life for all residents of West Covina</Li>
                            <Li>Transform the way our city views Public Safety</Li>
                            <Li>Push for a transparent local government and city management</Li>
                            <Li>Increase participation in local events, city meetings, and voter turnout</Li>
                            <Li>Engage with the youth and empower them to organize and become leaders</Li>
                        </Ul>
                    </Div>
                </Wrapper>
            </Section>
            {/* <Section>
                <Title className='h1-news'>IN THE NEWS</Title>
                <Wrapper className='wrapper-news'>
                    <Div className='div-news'>
                        <Img src='' className='img-news' />
                        <P className='p-news'></P>
                    </Div>
                    <Div className='div-news'>
                        <Img src='' className='img-news' />
                        <P className='p-news'></P>
                    </Div>
                    <Div className='div-news'>
                        <Img src='' className='img-news' />
                        <P className='p-news'></P>
                    </Div>
                </Wrapper>
            </Section> */}
        </Main>
    )
}

export default About