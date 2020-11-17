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
            <Section>
                <Div className='div-news1'>
                    <Img className='img-news' src='https://i.imgur.com/LVE0Q2g.png'/>
                    <P className='p-news'>Pictured above,left to right: Full Name 1, Full Name 2, Full Name 3, Full Name 4, Full Name 5, Full Name 6, Full Name 7, Full Name 8, Full Name 9, Full Name 10</P>
                </Div>
                <Div className='div-news2'>
                    <Img className='img-news' src='https://i.imgur.com/xXmU8hY.png' />
                    <P className='p-news'>Meet the West Covina youth who seek to ‘defund’ police, bringing social change</P>
                </Div>
            </Section>
        </Main>
    )
}

export default About