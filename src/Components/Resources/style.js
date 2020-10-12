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
    width: 90%;
    display: flex;
    justify-content: space-between;
    // &:nth-child(1) {
    //     padding-top: 200px;
    // }
`

export const Title = styled.h1`
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 60px;
`

export const Div = styled.div`
    margin-bottom: 17px;
    width: 48%;
    & .div-mapbox {
        border-radius: 16px;
    }
`