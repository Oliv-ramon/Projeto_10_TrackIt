import styled from "styled-components";

const Footer = styled.footer`
    width: 100%;
    height: 70px;

    display: flex
    ;
    justify-content: center;
    gap: 10px;

    position: fixed;
    bottom: 0;
    left: 0;

    button {
        border: 1px solid black;
    }
`;

export { Footer };