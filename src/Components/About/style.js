import styled, { keyframes } from 'styled-components'

export const Main = styled.main`

`

export const Section = styled.section`
    display: flex;
    width: 100%;
    &:nth-child(1) {
        padding-top: 133px;
        flex-direction: column;
        align-items: center;
    }
`

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: 60px;
`

export const Div = styled.div`
    width: 50%;
    &.div-logo {
        text-align: center;
    }
    &.div-goals {
        display: flex;
        flex-direction: column;
        align-self: center;
        position: relative;
        bottom: 26px;
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
    position: relative;
    top: -230px;
    font-family: Beirut;
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 58px;
`
export const H2 = styled.h2`
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
`

export const Ul = styled.ul`


`

export const Li = styled.li`
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 154.9%;
    margin-bottom: 5px;
`

export const P = styled.p`

`
export const Img = styled.img`

`