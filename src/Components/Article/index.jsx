import React, { useEffect, useState } from 'react';
import Form from './form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Div,
    H1,
    H2,
    P,
    Img,
    Span,
    A
} from './style';

const Article = (props) => {
    console.log(props, 'from article')
    const { articles } = props;

    return (
        <Div className='wrapper'>
            <H1>In Our Words</H1>
            <Div className='article-div'>
                <Img src={props.articles && articles[0].article_img} className='article-img' />
                <H2>{props.articles && articles[0].title}</H2>
                <Div className='info-div'>
                    <Div className='info-left'>
                        <Img src={props.articles && articles[0].user_img} className='author-img' />
                        <Span>
                            <P>{props.articles && articles[0].author}</P>
                            <P>{props.articles && articles[0].date}</P>
                        </Span>
                    </Div>
                    <Div className='info-right'>
                        <A href={props.articles && articles[0].facebook} target='_blank'>
                            <Img src='https://i.imgur.com/32wQeQq.png' className='social-icon' />
                        </A>
                        <A href={props.articles && articles[0].instagram} target='_blank'>
                            <Img src='https://i.imgur.com/xFImnke.png' className='social-icon' />
                        </A>
                        <A href={props.articles && articles[0].twitter} target='_blank'>
                            <Img src='https://i.imgur.com/486JE5L.png' className='social-icon' />
                        </A>
                    </Div>
                </Div>
                <P className='article'>
                {props.articles && articles[0].article}
                </P>
            </Div>
        </Div>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: state.article.articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Article))