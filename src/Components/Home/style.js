import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`;

export const Section = styled.section`
    display: flex;
    width: 100%;
    &:nth-child(1) {
        background: url('https://i.imgur.com/pplFJUP.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 506px;
        padding-top: 236px;
        flex-direction: column;
        align-items: center;
    }
    &:nth-child(2) {
        justify-content: space-around;
        height: 192px;
        background: linear-gradient(90deg, #115AAD 21.18%, #93E8BE 80.75%);
        @media (max-width: 850px) {
            flex-direction: column;
            align-items: center;
            height: 302px;
        }
    }
    &:nth-child(3) {
        flex-direction: column;
        align-items: center;
        margin-top: 80px
    }
    &:nth-child(4) {
        background: #FFF8F3;
        height: 569px;
        margin-top: 80px;
        @media (max-width: 925px) {
            flex-direction: column;
            align-items: center;
            height: 616px;
        }
    }
    &:nth-child(5) {
        flex-direction: column;
        align-items: center;
        margin: 80px 0px;
    }
`;

export const Div = styled.div`
    &.involved {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &.email {
        width: 50%;
        display: flex;
        padding-top: 36px;
    }
    &.blur-div {
        height: 183px;
        @media (max-width: 950px) {
            height: 133px;
        }
        @media (max-width: 501px) {
            
        }
    }
    &.sec-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-around;
        @media (max-width: 980px) {
            flex-direction: column;
            align-items: center;
        }
    }
    &.sec-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
        @media (max-width: 980px) {
            flex-direction: column;
            align-items: center;
            margin: 0px 0px 35px 0px;
        }
        @media (max-width: 500px) {
            width: 100%;
        }
    }
    &.resources {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        @media (max-width: 925px) {
            padding: 27px 0px 0px 0px;
        }
        @media (max-width: 500px) {
            width: 100%;
            div {
                width: 95%;
            }
            p {
                width: 100%;
            }
        }
    }  
    &.resources-map {
        width: 50%;
        display: flex;
        align-items: center;
        @media (max-width: 925px) {
            justify-content: center;
        }
        @media (max-width: 500px) {
            width: 95%;
            img {}
        }
    } 
    &.posts-wrapper {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        text-align: center;
        @media (max-width: 1320px) {
            a {
                width: 350px;
            }
        }
        @media (max-width: 1320px) {
            a {
                width: 300px;
            }
        }
        @media (max-width: 972px) {
            a {
                width: 275px;
            }
        }
        @media (max-width: 915px) {
            flex-direction: column;
            align-items: center;
            a {
                width: 400px;
                margin: 0px 0px 15px 0px;
            }
        }
        @media (max-width: 500px) {
            a {
                width: 95%;
            }
        }
    }
    &.email-list {
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    &.email-form {
        display: flex;
        align-items: center;
    }
`;

export const Span = styled.span`
    font-weight: bold;
`;

export const H1 = styled.h1`
    font-size: 48px;
    line-height: 55px;
    font-weight: 100;
    width: 714px;
    text-align: center;
    @media (max-width: 950px) {
        font-size: 32px;
        line-height: 51px;
    }
    @media (max-width: 499px) {
        font-size: 24px;
        line-height: 47px;
        width: 100%;
    }
`;

export const H2 = styled.h2`
    margin-bottom: 80px;
    color: black;
    &.sec4-h2 {
        margin: 0px 0px 30px 0px;
    }
    &.involved  {
        margin: 12px 0px;
    }
`

export const H3 = styled.h3`
    padding-bottom: 10px;
    width: 355px;
`;

export const Input = styled.input`
    width: 520px;
    height: 56px;
    background: #FFFFFF;
    border-radius: 28px 0px 0px 28px;
    border: 0px;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 1px;
    :focus {
        outline: none;
    }
    @media (max-width: 1367px) {
        width: 432px;
    }
    @media (max-width: 1132px) {
        width: 318px;
    }
    @media (max-width: 750px) {
        width: 343px;
        font-size: 14px;
    }
    @media (max-width: 501px) {
        border-radius: 28px;
    }
`;

export const Form = styled.form`
    @media (max-width: 501px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Btn = styled.button`
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &.post-btn {
        margin-top: 50px;
        border: 0px;
        width: 118px;
        height: 32px;
        background: #93E8BE;
        margin: 12px 0px;
        border-radius: 16px;
    }
    &.involved {
        width: 118px;
        height: 32px;
        background: #93E8BE;
        margin: 12px 0px;
        border: 0px;
        border-radius: 16px;
    }
    &.resources {
        width: 118px;
        height: 32px;
        margin: 12px 0px;
        background: #EE8C3A;
        border: 0px;
        border-radius: 16px;
        color: white;
    }
    &.scroll {
        width: 196px;
        height: 59px;
        background: #EE8C3A;
        color: #FFFFFF;
        border: 0px;
        border-radius: 30px;
        margin-top: 20px;
        @media (max-width: 925px) {
            margin: 24px 0px;
        }
    }
    &.signup {
        width: 144px;
        height: 56px;
        background: #313030;
        border-radius: 0px 28px 28px 0px;
        border: 0px;
        color: #FFFFFF;
        @media (max-width: 1367px) {
            width: 115px;
        }
        @media (max-width: 1132px) {
            width: 86px;
        }
        @media (max-width: 750px) {
            width: 76px;
            font-size: 11px;
        }
        @media (max-width: 501px) {
            border-radius: 28px;
            width: 343px;
            margin: 10px 0px 0px 0px;
        }
    }
`;

export const P = styled.p`
    &.sec4-p {
        width: 409px;
        line-height: 27px;
        color: black;
    }
    &.involved {
        color: black;
        width: 260px;
        text-align: center;
    }
    &.post {
        width: 100%;
        line-height: 27px;
        font-weight: bold;
    }
    &.email {
        width: 355px;
        line-height: 24px;
    }
`;

export const Img = styled.img`
    &.map {
        @media (max-width: 1100px) {
            width: 450px;
        }
    }
    &.third {
        width: 66px;
        margin-top: 6px;
    }
    &.post {
        width: 100%;
        height: 220px;
    }
`;

export const A = styled(Link)`
    color: black;
    text-decoration: none;
    &.post-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
        cursor: pointer;
    }
`;

