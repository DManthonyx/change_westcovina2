import React from 'react'
import { withRouter } from 'react-router-dom'

import {
    Main,
    Section,
    Wrapper,
    Div,
    Title,
    H1,
    H2,
    P,
    Img
} from './style'

const Media = () => {
    return (
        <Main>
            <Title>Get Connected</Title>
            <Section>
                <H1>SOCIAL MEDIA</H1>
                <Wrapper>
                    <Div>
                        <Div className='social-name'>
                            <Img src='https://i.imgur.com/fYl6Nm3.png'  className='img-logo' title='Change West Covina Instagram' />
                            <H2>INSTAGRAM</H2>
                        </Div>
                        <Img src='https://i.imgur.com/cjulNMW.png' title='Change West Covina Instagram'/>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dignissim amet netus eget leo phasellus lorem. Varius.
                        </P>
                    </Div>
                    <Div>
                        <Div className='social-name'>
                            <Img src='https://i.imgur.com/fcuoton.png'  className='img-logo' title='Change West Covina Facebook' />
                            <H2>FACEBOOK</H2>
                        </Div>
                        <Img src='https://i.imgur.com/cjulNMW.png' title='Change West Covina Facebook'/>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dignissim amet netus eget leo phasellus lorem. Varius.
                        </P>
                    </Div>
                    <Div>
                        <Div className='social-name'>
                            <Img src='https://i.imgur.com/fsdEmi8.png'  className='img-logo' title='Change West Covina Twitter' />
                            <H2>TWITTER</H2>
                        </Div>
                        <Img src='https://i.imgur.com/cjulNMW.png' title='Change West Covina Twitter'/>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dignissim amet netus eget leo phasellus lorem. Varius.
                        </P>
                    </Div>
                </Wrapper>
            </Section>
        </Main>
    )
}

export default withRouter(Media)