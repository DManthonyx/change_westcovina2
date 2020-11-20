import React from 'react';
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

const Articles = (props) => {
    const { current } = props;
    if (props.current) return <div>not found</div>
    return (
        <Div className='wrapper'>
            <H1>In Our Words</H1>
            <Div className='article-div'>
                <Img src={current && current.article_img} className='article-img' />
                <H2>{current && current.title}</H2>
                <Div className='info-div'>
                    <Div className='info-left'>
                        <Img src={current && current.user_img} className='author-img' />
                        <Span>
                            <P>{current && current.author}</P>
                            <P>{current && current.date}</P>
                        </Span>
                    </Div>
                    <Div className='info-right'>
                        <A href={current && current.facebook} target='_blank'>
                            <Img src='https://i.imgur.com/32wQeQq.png' className='social-icon' />
                        </A>
                        <A href={current && current.instagram} target='_blank'>
                            <Img src='https://i.imgur.com/xFImnke.png' className='social-icon' />
                        </A>
                        <A href={current && current.twitter} target='_blank'>
                            <Img src='https://i.imgur.com/486JE5L.png' className='social-icon' />
                        </A>
                    </Div>
                </Div>
                <P className='article'>
                    {current && current.article}
                </P>
            </Div>
        </Div>
    )
};

const mapStateToProps = (state) => {
    return {
        articles: state.article.articles,
        current: state.article.current
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Articles));