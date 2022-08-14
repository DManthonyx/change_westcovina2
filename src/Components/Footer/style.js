import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// cannot be namer Footer because its being used in a Footer component 
export const Wrapper = styled.footer`
    padding: 50px 0px;
    background: #313030;
    width: 100%;
    display: flex;
    @media (max-width: 960px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export const Sec = styled.section`
    display: flex;
    width: 40%;
    @media (max-width: 1356px) {
        width: 50%;
    }
    &:nth-child(1) {
        justify-content: space-evenly;
        @media (max-width: 1356px) {
            width: 67%;
        }
        @media (max-width: 707px) {
            width: 99%;
        }
    }
    &:nth-child(2) {
        width: 20%;
        justify-content: center;
        @media (max-width: 1356px) {
            display: none;
        }
    }
    &:nth-child(3) {
        flex-direction: column;
        margin: 0px 0px 25px 0px;
        @media (max-width: 1356px) {
            width: 67%;
        }
        @media (max-width: 707px) {
            width: 99%;
        }
    }
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Ul = styled.ul`
    display: inline-block;
    & Li:first-child {
        color: #EE8C3A;
        margin-bottom: 5px;
    }
`;

export const Li = styled.li`
    color: white;
    list-style: none;
    padding-bottom: 3px;
`;

export const Img = styled.img`
    width: 132px;
`;

export const SocialWrapper = styled.div`
    display: flex;
    padding-bottom: 22px;
    &:nth-child(2) {
        flex-direction: column;
        padding-bottom: 0px;
    }
`;
export const SocialDiv = styled.div`
    display: flex;
    width: 50%;
    &:nth-child(2) {
        justify-content: flex-end;
        padding-right: 29px;
    }
    @media (max-width: 960px) {
        display: none;
    }
`;

export const SocialImg = styled.img`
    width: 35px;
    margin-right: 7px;
`;

export const SocialLink = styled(NavLink)`

`;

export const P = styled.p`
    color: #EE8C3A;
    padding-bottom: 7px;
    &.soc-p {
        color: white;
        font-size: 21px;
    }
`;

export const Form = styled.form`

`;

export const Input = styled.input`
    width: 73%;
    height: 39px;
    border: 0px;
    border-radius: 28px 0px 0px 28px;
    padding-left: 20px;
    &:focus {
        outline: none;
    }
`;

export const Btn = styled.button`
    width: 104px;
    height: 39px;
    color: #393A40;
    background: #93E8BE;
    border-radius: 0px 28px 28px 0px;
    border: 0px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    @media (max-width: 500px) {
        width: 65px;
    }
`;