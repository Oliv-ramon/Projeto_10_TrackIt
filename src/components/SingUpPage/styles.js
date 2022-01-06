import styled from "styled-components";

const Container = styled.main`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11px;

    img {
        height: 178px;
        width: 180px;
    }
    span {
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;

        text-decoration-line: underline;

        color: #52B6FF;
    }
`;

const Form = styled.form`
    width: 303px;
    
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Input = styled.input`
    height: 45px;
    padding: 0 11px;

    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #666666;

    :disabled {
        opacity: 0.7;
        color: #AFAFAF;
    }
    
    ::placeholder {
        color: #DBDBDB;
    }
`

const Button = styled.button`
    height: 45px;

    background: #52B6FF;
    border-radius: 4.6px;

    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 400;

    :disabled {
        opacity: 0.7;
    }

`

export { Container, Form, Input, Button }