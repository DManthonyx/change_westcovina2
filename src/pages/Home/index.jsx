import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { CreateUser  } from '../../store/actions/authActions';
import { UpdateCurrentArticle  } from '../../store/actions/articleActions';

import {
    Main,
    Section,
    Div,
    H1,
    H2,
    H3,
    Btn,
    P,
    Img,
    Form,
    Input,
    Span,
    A,
} from './style';

const Home = (props) => {
    const { articles, updateCurrent } = props;
    const [email, setEmail] = useState('');
    const submit = (e) => {
        e.preventDefault();
        const emailCorrect = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/;
        if(email.search(emailCorrect) === -1) {
        } else {
            props.createUser({email})
        }
    }

    const scrollToEmail = () => {
        window.scroll({ top: 750, left: 0, behavior: 'smooth'});
    }

    return (
        <Main>
            <Section>
                <Div className='blur-div'>
                    <H1>We Must Be the <Span>Change</Span> We Want to<br />See in <Span>West Covina</Span></H1>
                </Div>
                <Btn className='scroll' onClick={() => scrollToEmail()}>JOIN US</Btn>
            </Section>
            <Section>
                <Div className='email-list'>
                    <H3>JOIN OUR EMAIL LIST</H3>
                    <P className='email'>Stay up to date with issues affecting our community of <br /> West Covina, and learn about how we can make a <br /> positive difference together.</P>
                </Div>
                <Div className='email-form'>
                    <Form onSubmit={submit}>
                        <Input type="text" name="email" placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)}/>
                        <Btn className='signup'>SIGN UP</Btn>
                    </Form>
                </Div>
            </Section>
            <Section>
                <H2 className='involved-title'>GET INVOLVED</H2>
                <Div className='sec-wrapper'>
                    <Div className='sec-div'>
                        <Div className='involved'>
                            <Img className='involved' src="https://i.imgur.com/BwfJCky.png" />
                            <H2 className='involved'>EVENTS</H2>
                        </Div>
                        <Div className='involved'>
                            <P className='involved'>Join us in making an impact in West Covina through various volunteer and direct action events</P>
                            <Btn className='involved'><A to='/updates'>SEE EVENTS</A></Btn>
                        </Div>
                    </Div>
                    <Div className='sec-div'>
                        <Div className='involved'>
                            <Img className='involved' src="https://i.imgur.com/d0NMi5n.png" />
                            <H2 className='involved'>CITY COUNCIL MEETINGS</H2>
                        </Div>
                        <Div className='involved'>
                            <P className='involved'>Read our Peoples’ Agenda and participate in local government by making your voice heard</P>
                            <Btn className='involved'><A to='/updates'>LEARN MORE</A></Btn>
                        </Div>
                    </Div>
                    <Div className='sec-div'>
                        <Div className='involved'>
                            <Img className='involved third' src="https://i.imgur.com/LbrkAFU.png" />
                            <H2 className='involved'>SLACK CONVERSATION</H2>
                        </Div>
                        <Div className='involved'>
                            <P className='involved'>Get and stay connected with Change West Covina by joining the conversation on Slack</P>
                            <Btn className='involved'><A to='/'>SLACK INFO</A></Btn>
                        </Div>
                    </Div>
                </Div>
            </Section>
            <Section>
                <Div className='resources'>
                    <Div className='resources-inner'>
                        <H2 className='sec4-h2'>FIND WHAT YOU NEED</H2>
                        <P className='sec4-p'>Check out our extensive list of resources to  locate local businesses, organizations, and services to help you live your life to the fullest. </P>
                        <Btn className='resources'><A to='/resources'>RESOURCES</A></Btn>
                    </Div>
                </Div>
                <Div className='resources-map'>
                    <Img className='map' src="https://i.imgur.com/5pYWRym.png" title="West Covina Map" />
                </Div>
            </Section>
            <Section>
                <H2>RECENT POSTS</H2>
                <Div className='posts-wrapper'>
                    {
                        props.articles && articles.map((article, i) => {
                            return (
                                <A to='/article' className='post-div' key={i} onClick={() => updateCurrent(article)}>
                                    <Img className='post' src={article.article_img} />
                                    <P className='post'>{article.title}</P>
                                    <P className='post'>{article.author}</P>
                                </A>
                            )
                        })
                    }
                </Div>
                <Btn className='post-btn'><A to='/article'>READ MORE</A></Btn>
            </Section>
        </Main>
    );
};

const mapStateToProps = (state) => {
    return {
        articles: state.article.articles
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (creds) => dispatch(CreateUser(creds)),
        updateCurrent: (article) => dispatch(UpdateCurrentArticle(article))
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));