import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.main`
    width: 100%;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 166px;
`;

export const Section = styled.section`
    display: flex;
    padding-top: 80px;
    width: 90%;
    justify-content: space-between;
    margin-bottom: 100px;
    &:nth-child(3) {
        width: 100%;
        flex-direction: column;
        background: #FFF8F3;
        align-items: center;
        margin-bottom: 0px;
    }
    &:nth-child(4) {
        flex-direction: column;
    }
`;

export const SubSection = styled.aside`
    width: 90%;
    margin-bottom: 67px;
`;

export const Title = styled.h1`
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 66px;
`;

export const Div = styled.div`
    width: 48%;
    &.div-calendar {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const H2 = styled.h2`
    font-family: Risque;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 154.9%;
    transform: rotate(-9.06deg);
    margin-top: 63px;
`;

export const SubTitle = styled.h2`
    margin-bottom: 50px;
`;

export const ArticleWrap = styled.div`
    display: flex;
    justify-content: space-between;;
`;

export const ArticleDiv = styled.div`
    width: 22%;
`;

export const P = styled.p`
    &:nth-child(2) {
        font-weight: bold;
        margin: 10px 0px;
    }
    &:nth-child(4) {
        line-height: 24px;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 160px;
`;

export const Selfie = styled.img`
    width: 28px;
    border-radius: 50%;
    margin-right: 10px;
`;

export const Span = styled.span`
    display: flex;
    margin-bottom: 10px;
`;

export const SubSpan = styled.span`

`;

export const Btn = styled(NavLink)`
    border: 0px;
    background: none;
    color: #115AAD;
    margin: 22px 0px;
    cursor: pointer;
    text-decoration: none;
    :focus {
        outline: none;
    }
`;

export const MeetingWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MeetingDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
`;

export const MeetingNum = styled.div`
    display: flex;
    width: 30%;
`;

export const H3 = styled.h3`

`;

export const Num = styled.p`
    font-size: 8em;
    text-shadow: 6px 3px 11px #115AAD;
    color: #115AAD;
    padding-right: 2px;
    &.num {
        padding-right: 10px;
    }
`;

export const NumP = styled.p`
    align-self: center;
    border-left: 1px solid;
    padding-left: 11px;
    font-weight: 100;
    height: 64px;
`;

export const DivLine = styled.div`

`;