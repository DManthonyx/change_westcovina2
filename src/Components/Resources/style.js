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
    flex-direction: column;
    &:nth-child(3) {
        width: 100%;
        background: #93e8be82;
        flex-direction: column;
        align-items: center;
    }
`

export const Title = styled.h1`
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 60px;
`

export const SubTitle = styled.h2`
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 60px;
    width: 90%;
`

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
        width: 90%;
    }
`

export const P = styled.p`

`

export const Ul = styled.ul`

`

export const Li = styled.li`
    list-style: none;
`

export const Span = styled.span`

`