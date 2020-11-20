import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 600px;
    margin-bottom: 100px;
`;

export const Section = styled.section`

`;

export const Div = styled.div`

`;

export const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    height: 25px;
    border: 0px;
    background: #0e0d0d0f;
    margin: 10px 0px;
    &:focus {
        outline: none;
    }
`;

export const Btn = styled.button`
    width: 100%;
    height: 25px;
    border: 0px;
    background: #0e0d0d0f;
    margin: 10px 0px;
    &:focus {
        outline: none;
    }
`;