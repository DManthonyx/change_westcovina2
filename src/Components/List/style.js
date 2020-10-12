import styled from 'styled-components'

export const Ul = styled.ul`
    height: 500px;
    overflow: scroll;
`
export const Li = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    border-left: 8px solid #C4C4C4;
    margin-bottom: 40px;
`
export const Div = styled.div`
    &.div-date {
        width: 25%;
        align-self: center
    }
    &.div-info {
        width: 69%;
    }
`
export const P = styled.p`
    font-size: 20px;
    width: 100%;
    &.p-date {
        border-right: 1px solid #000000;
        text-align: center;
    }
`
