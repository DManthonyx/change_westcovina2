import styled from 'styled-components'

export const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Section = styled.section`
    display: flex;
    width: 100%;
    &:nth-child(1) {
        background: url('https://i.imgur.com/3Fxwy7v.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 506px; 
        padding-top: 236px;
        flex-direction: column;
        align-items: center;
    }
    &:nth-child(2) {
        justify-content: center;
        height: 192px;
        background: linear-gradient(90deg, #115AAD 21.18%, #93E8BE 80.75%);
    }
    &:nth-child(3) {
        flex-direction: column;
        align-items: center;
    }
    &:nth-child(4) {
        background: #FFF8F3;
        height: 649px;
    }
    &:nth-child(5) {
        height: 649px;
        flex-direction: column;
        align-items: center;
    }
`
export const Span = styled.span`
    font-weight: bold;
`

export const H1 = styled.h1`
    font-size: 48px;
    line-height: 66px;
    font-weight: 100;
    text-align: center;
`

export const H2 = styled.h2`
    margin: 80px 0px;
    &.sec4-h2 {
        margin: 0px 0px 30px 0px;
    }
`

export const H3 = styled.h3`
    padding-bottom: 10px;
    width: 50%;
`


export const Button = styled.button`
    width: 196px;
    height: 59px;
    background: #EE8C3A;
    color: #FFFFFF;
    border: 0px;
    border-radius: 30px;
    margin-top: 20px;
`

export const Div = styled.div`
    width: 50%;
    display: flex;
    padding-top: 36px;
    &:nth-child(1) {
        flex-direction: column;
        align-items: center;
        color: #FFFFFF;
    }
    &:nth-child(2) {
        justify-content: center;
    }
`

export const BlurDiv = styled.div`
    width: 50%;
    height: 183px;
    background: rgba(196, 196, 196, 0.01);
    backdrop-filter: blur(10px);
`

export const EmailP = styled.p`
    width: 50%;
    line-height: 24px;
`

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
`

export const SignUpBtn = styled.button`
    width: 144px;
    height: 56px;
    background: #313030;
    border-radius: 0px 28px 28px 0px;
    border: 0px;
    color: #FFFFFF;
`

export const SecWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const SecDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InvolvedImg = styled.img`
    &.third {
        width: 66px;
        margin-top: 6px;
    }
`

export const InvolvedH2 = styled.h2`
    margin: 12px 0px;
`

export const InvolvedBtn = styled.button`
    width: 118px;
    height: 32px;
    background: #93E8BE;
    margin: 12px 0px;
    border: 0px;
    border-radius: 16px;
`

export const InvolvedP = styled.p`
    width: 260px;
    text-align: center;
`

export const Btn = styled.button`
    width: 118px;
    height: 32px;
    margin: 12px 0px;
    background: #EE8C3A;
    border: 0px;
    border-radius: 16px;
    color: white;
    &.post-btn {
        margin: 50px 0px;
    }
`

export const PostP = styled.p`
    width: 100%;
    line-height: 27px;
    font-weight: bold;
`

export const ResourceDiv = styled.div`
    width: 50%;
    &:nth-child(1) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`

export const ResourceDivInner = styled.div`

`

export const P = styled.p`
    width: 409px;
    line-height: 27px;
`

export const Img = styled.img`
    margin-top: 76px;
`

export const PostImg = styled.img`

`


