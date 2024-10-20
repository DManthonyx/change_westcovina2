import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Calendar from '../../components/calender';
import List from '../../components/list';
import { UpdateCurrentArticle  } from '../../store/actions/articleActions';

import {
    Main,
    Section,
    SubSection,
    Title,
    Div,
    SubTitle,
    ArticleWrap,
    MeetingWrap,
    MeetingDiv,
    MeetingNum,
    H3,
    Num,
    NumP,
    DivLine,
    ArticleDiv,
    Img,
    P,
    Span,
    Selfie,
    SubSpan,
    Btn,
} from './style';

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
                    {props.articles && props.articles.map((article, i) => {
                        return (
                            <ArticleDiv key={i}>
                                <Img src={article.article_img} />
                                <P>{article.title}</P>
                                <Span>
                                    <Selfie src={article.user_img} />
                                    <SubSpan>
                                        {article.author} <br /> {article.date}
                                    </SubSpan>
                                </Span>
                                <P>{article.article.slice(0, 200)}...
                                </P>
                                <Btn to='/article' onClick={() => props.updateCurrent(article)}>Read More</Btn>
                            </ArticleDiv>
                        )
                    })}
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
    );
};

const mapStateToProps = (state) => {
    return {
      events: state.resource.events,
      articles: state.article.articles
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCurrent: (article) => dispatch(UpdateCurrentArticle(article))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Updates));
