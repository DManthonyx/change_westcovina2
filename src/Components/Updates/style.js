import styled from 'styled-components'

export const Main = styled.main`
    width: 100%;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 166px;
`

export const Section = styled.section`
    display: flex;
    padding-top: 80px;
    width: 90%;
    justify-content: space-between;
    &:nth-child(1) {
    }
`

export const Title = styled.h1`
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 66px;
`

export const Div = styled.div`
    width: 48%;
    &.div-calendar {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const H2 = styled.h2`
    font-family: Risque;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 154.9%;
    transform: rotate(-9.06deg);
    margin-top: 63px;
`