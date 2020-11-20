import React from 'react'
import { withRouter } from 'react-router-dom'
import Calendar from '../Calender'
import List from '../List'
import { connect } from 'react-redux';

import {
    Main,
    Section,
    SubSection,
    Title,
    Div,
    H2,
    SubTitle,
    ArticleWrap,
    ArticleDiv,
    Img,
    P,
    Span,
    SubSpan,
    Selfie,
    Btn
} from './style'
const Updates = (props) => {
    console.log(props && props.events, 'update')
    return (
        <Main>
            <Title>Updates</Title>
            <Section>
                <Div className='div-calendar'>
                    <Calendar />
                </Div>
                <Div>
                    <List events={props && props.events}/>
                </Div>
            </Section>
            <Section>
            <SubSection>
                <SubTitle>IN OUR WORDS</SubTitle>
                <ArticleWrap>
                    <ArticleDiv>
                        <Img src='https://i.imgur.com/cjulNMW.png' />
                        <P>West Covina District 1 Candidate Forum</P>
                        <Span>
                            <Selfie src='https://i.imgur.com/oCQ7njG.jpg' />
                            <SubSpan>
                                Name of Arthur <br /> September 22, 2020
                            </SubSpan>
                        </Span>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in risus vel risus interdum pellentesque. Vestibulum a neque in odio facilisis gravida. Morbi condimentum neque sit amet mauris tincidunt, scelerisque commodo magna efficitur. Proin ut tellus urna. Sed at condimentum neque, ut vehicula libero. Suspendisse in nisl quis nulla ultrices efficitur. Nulla sit amet cursus nisl, vitae euismod nibh. Aliquam eu mattis nisi. Aliquam varius diam in urna elementum aliquam...
                        </P>
                        <Btn>Read More</Btn>
                    </ArticleDiv>
                    <ArticleDiv>
                        <Img src='https://i.imgur.com/cjulNMW.png' />
                        <P>West Covina District 1 Candidate Forum</P>
                        <Span>
                            <Selfie src='https://i.imgur.com/oCQ7njG.jpg' />
                            <SubSpan>
                                Name of Arthur <br /> September 22, 2020
                            </SubSpan>
                        </Span>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in risus vel risus interdum pellentesque. Vestibulum a neque in odio facilisis gravida. Morbi condimentum neque sit amet mauris tincidunt, scelerisque commodo magna efficitur. Proin ut tellus urna. Sed at condimentum neque, ut vehicula libero. Suspendisse in nisl quis nulla ultrices efficitur. Nulla sit amet cursus nisl, vitae euismod nibh. Aliquam eu mattis nisi. Aliquam varius diam in urna elementum aliquam...
                        </P>
                        <Btn>Read More</Btn>
                    </ArticleDiv>
                    <ArticleDiv>
                        <Img src='https://i.imgur.com/cjulNMW.png' />
                        <P>West Covina District 1 Candidate Forum</P>
                        <Span>
                            <Selfie src='https://i.imgur.com/oCQ7njG.jpg' />
                            <SubSpan>
                                Name of Arthur <br /> September 22, 2020
                            </SubSpan>
                        </Span>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in risus vel risus interdum pellentesque. Vestibulum a neque in odio facilisis gravida. Morbi condimentum neque sit amet mauris tincidunt, scelerisque commodo magna efficitur. Proin ut tellus urna. Sed at condimentum neque, ut vehicula libero. Suspendisse in nisl quis nulla ultrices efficitur. Nulla sit amet cursus nisl, vitae euismod nibh. Aliquam eu mattis nisi. Aliquam varius diam in urna elementum aliquam...
                        </P>
                        <Btn>Read More</Btn>
                    </ArticleDiv>
                </ArticleWrap>
            </SubSection>
            </Section>
            <Section>
                <SubTitle>CITY COUNCIL MEETING</SubTitle>
            </Section>
        </Main>
    )
}
const mapStateToProps = (state) => {
    return {
      events: state.resource.events
    }
  }
  
export default withRouter(connect(mapStateToProps, null)(Updates))
  