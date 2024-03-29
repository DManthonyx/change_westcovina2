import styled from 'styled-components'

export const Main = styled.main`

`

export const Section = styled.section`
    display: flex;
    width: 100%;
    &:nth-child(1) {
        padding: 133px 0px;
        flex-direction: column;
        align-items: center;
        @media (max-width: 650px) {
            left: 26px;
            width: 90%;
            padding-bottom: 50px;
        }
    }
    &:nth-child(2) {
        background: #FFF8F3;
        justify-content: space-evenly;
        height: 500px;
        align-items: center;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: 60px;
`;

export const Div = styled.div`
    width: 50%;
    &.div-logo {
        text-align: center;
        @media (max-width: 650px) {
            display: none;
        }
    }
    &.div-goals {
        display: flex;
        flex-direction: column;
        align-self: center;
        position: relative;
        bottom: 26px;
        @media (max-width: 650px) {
            left: 26px;
            width: 90%;
        }
    }
    &.div-news1 {
        width: 521px;
    }
    &.div-news2 {
        width: 412px;
    }

`

export const Title = styled.h1`
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 66px;
    @media (max-width: 650px) {
        font-size: 36px;
    }
`;

export const H2 = styled.h2`
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    @media (max-width: 650px) {
        font-size: 28px;
        font-weight: normal;
    }
`;

export const Ul = styled.ul`
`;

export const Li = styled.li`
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 154.9%;
    margin-bottom: 5px;
`;

export const P = styled.p`
    line-height: 1.5;
    font-size: 16px;
    padding-top: 17px;
`;
export const Img = styled.img`
    width: 400px;
    @media (max-width: 1000px) {
        width: 300px;
    }
    @media (max-width: 850px) {
        width: 200px;
    }
`;