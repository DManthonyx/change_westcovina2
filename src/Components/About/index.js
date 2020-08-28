import React from 'react';
import { founders } from '../../Const/founders'
import {
    Main,
    Section,
    Founder,
    Img,
    Name,
    Intro,
    InfoDiv,
    ContactDiv,
    Facebook,
    Insta,
    LinkedIn,
    Email
} from './style'


const About = () => {

    return (
        <Main>
            <Section>
        
            </Section>
            <Section>

            </Section>
            <Section>
                {founders.map((founder) => {
                    return(
                        <Founder>
                            <Img src={founder.picture}/>
                            <InfoDiv>
                                <Name>{founder.name}</Name>
                                <Intro>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</Intro>
                            </InfoDiv>
                            <ContactDiv>
                                <Facebook></Facebook>
                                <Insta></Insta>
                                <LinkedIn></LinkedIn>
                                <Email></Email>
                            </ContactDiv>
                        </Founder>
                    )
                })}
            </Section>
        </Main>
    )
}

export default About