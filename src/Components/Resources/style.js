import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 166px;
`;

export const Section = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    &:nth-child(3) {
        width: 100%;
        background: #93e8be82;
        flex-direction: column;
        align-items: center;
        padding-top: 50px;
        padding-bottom: 70px;
    }
`;

export const Title = styled.h1`
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 60px;
`;

export const SubTitle = styled.h2`
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 60px;
    width: 90%;
`;

export const ResTitle = styled.h2`
    font-size: 22px;
    margin-bottom: 30px;
`;

export const Div = styled.div`
    margin-bottom: 17px;
    width: 48%;
    &.div-mapbox {
        border-radius: 16px;
    }
    &.div-resource {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    &.div-list {
        height: 432px;
        overflow: hidden;
    }
    &.div-telephone {
        width: 87%;
        background: #313030;
        color: white;
        padding: 27px;
        border-radius: 16px;

    }
    &.telephone-sub {
        width: 100%;

    }
    &.small-wrap {
        display: flex;
        justify-content: space-between;
        width: 90%;
    }
    &.small-div {
        background: #313030;
        color: white;
        border-radius: 16px;
        width: 44%;
        padding: 21px;
    }
`;

export const P = styled.p`
    &.res-info {
        margin-bottom: 25px;
        font-size: 16px;
        line-height: 1.5;
    }
`;

export const Ul = styled.ul`
    &.ul-wrap {
        display: flex;
        flex-direction: column;
        width: 82%;
        flex-wrap: wrap;
        height: 140px;
    }
    &.ul-small {

    }
`

export const Li = styled.li`
    list-style: none;
    margin-bottom: 10px;
    width: 725px;
    display: flex;
    justify-content: space-between;
    &.li-wrap {
        padding-right: 27px;
        width: 592px;
    }
    &.li-small {
        width: 100%;
    }
`;

export const Span = styled.span`

`;