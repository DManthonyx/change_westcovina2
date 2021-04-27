import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { CreateArticle  } from '../../Store/Actions/articleActions';

import {
    Main,
    Form,
    Input,
    Btn
} from './style';

const Admin = (props) => {

    useEffect(() => {

    },[]);

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [article, setArticle] = useState('')
    const [image, setImage] = useState('')

    const submit = (e) => {
        e.preventDefault()
        const payload = {
            name: name,
            date: date,
            title: title,
            article: article,
            image: image,
        }
        // props.createArticle(payload)
    }

    return (
        <Main>
            <Form onSubmit={submit}>
                <Input type="text" name="name" placeholder="name" value={name} onChange={e => setName(e.target.value)}/>
                <Input type="text" name="date" placeholder="date" value={date} onChange={e => setDate(e.target.value)}/>
                <Input type="text" name="title" placeholder="title" value={title} onChange={e => setTitle(e.target.value)}/>
                <Input type="text" name="article" placeholder="article" value={article} onChange={e => setArticle(e.target.value)}/>
                <Input type="file" name="image" placeholder="image" accept="image/*"  onChange={e => setImage(e.target.files[0])}/>
                <Btn>Submit</Btn>
            </Form>
        </Main>
    )
};

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        authState: () => dispatch(),
        createArticle: (payload) => dispatch(CreateArticle(payload))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));