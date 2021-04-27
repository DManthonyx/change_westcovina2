import styled from 'styled-components';

export const Ul = styled.ul`
    height: 500px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 5px;
        background: #93E8BE;
        border: 0px;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px grey;
        border-radius: 1px;
    }
    &::-webkit-scrollbar-thumb {
        background: white;
        border-radius: 10px;
    }
`;
export const Li = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    border-left: 8px solid #93E8BE;
    margin: 0px 10px 40px 0px;
`;
export const Div = styled.div`
    &.div-date {
        width: 25%;
        align-self: center
    }
    &.div-info {
        width: 69%;
    }
    &.res {
        padding: 15px 15px 15px 53px;
    }
`;
export const P = styled.p`
    font-size: 20px;
    width: 100%;
    &.p-date {
        border-right: 1px solid #000000;
        text-align: center;
    }
    &.p-res {
        margin: 2px 0px;
    }
`;
