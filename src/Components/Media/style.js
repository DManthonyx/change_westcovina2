import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;
`
export const Section = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 80px;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Div = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &.social-name {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 10px;
    }
`
export const Title = styled.h1`
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 66px;
`
export const H1 = styled.h1`
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 50px;
`
export const H2 = styled.h2`

`
export const P = styled.p`
    width: 304px;
`
export const Img = styled.img`
    &.img-logo {
        width: 30px;
        padding-right: 14px;
    }
`