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
    Btn,
    MeetingWrap,
    MeetingDiv,
    MeetingNum,
    H3,
    Num,
    NumP,
    DivLine
} from './style'
const Updates = (props) => {
    return (
        <Main>
            <Title>Updates</Title>
            <Section>
                <Div className='div-calendar'>
                    <Calendar />
                </Div>
                <Div>
                    <List data={props && props.events} type={'events'}/>
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
                <MeetingWrap>
                    <H3>How To Phone-In to City Council Meetings</H3>
                    <MeetingDiv>
                        <MeetingNum>
                            <Num>1</Num>
                            <NumP>
                                Email<br />
                                city_clerk@westcovina.org<br />
                                by 3pm day of meeting
                            </NumP>
                        </MeetingNum>
                        <MeetingNum>
                            <Num className='num'>2</Num>
                            <NumP>
                                Ask to make a phone-in<br />
                                comment
                            </NumP>
                        </MeetingNum>
                        <MeetingNum>
                            <Num className='num'>3</Num>
                            <NumP>
                                Dail the number at 7pm<br />
                                and be ready with your<br />
                                comment
                            </NumP>
                        </MeetingNum>
                        <DivLine></DivLine>
                    </MeetingDiv>
                </MeetingWrap>
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
