import styled from "styled-components";

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    border: 0.05rem solid var(--lightBlue);
    border-color: ${ props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    background: transparent;
    padding: 0.5rem;
    color: var(--lightBlue);
    border-radius: 8px;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        color: var(--mainWhite);
    }
`