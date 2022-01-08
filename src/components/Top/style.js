import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    height: 70px;
    padding: 9px 18px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    img:first-child {
        width: 97px;
        height: 49px;

        object-fit: contain;
    }
    img:last-child {
        width: 51px;
        height: 51px;

        border-radius: 98.5px;
    }
`;

export { Header };  