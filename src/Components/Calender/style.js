import styled from 'styled-components'

export const Table = styled.section`
    width: 500px;
    height: 314px;
    box-shadow: 0px 0px 37px #C4C4C4;
    border-radius: 17px;
`
export const Thead = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 60px;
    align-items: center;
    background: #C4C4C4;
    border-radius: 16px 16px 0px 0px;
`
export const Tbody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 12px;
`
export const Tr = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 39px;
`
export const Td = styled.div`
    width: 50px;
    text-align: center;
`
export const H1 = styled.h1`
    text-align: center;
    color: white;
`
export const Button = styled.button`
    width: 35px;
    height: 35px;
    border: 3px solid white;
    border-radius: 25px;
    &.prev {
        background: url('https://i.imgur.com/j4CTk2y.png');
        background-repeat: no-repeat;
        background-position: center;
    }
    &.next {
        background: url('https://i.imgur.com/8W0DaMM.png');
        background-repeat: no-repeat;
        background-position: center;
    }
`