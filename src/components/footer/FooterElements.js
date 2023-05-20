import styled from "styled-components";

export const FooterContainer = styled.div`
    padding-top: 30px;
    display: flex;
    padding-bottom: 15px;
    background: black;

`

export const FooterWrapper = styled.div`
    max-width: 900px;


`

export const FooterH2 = styled.h2`
    font-size: 1.3rem;
    color: white;
    font-weight: 500;
    margin-bottom: 30px;
    &:hover {
        color: yellow;
        transform: scale(1.2);
    }

`

export const FooterLink = styled.a`
    font-size: 0.9rem;
    text-decoration: none;
    color: white;
    display: flex;
    transition: all 0.3s ease-in-out ;

    &:hover {
        color: yellow;
        transform: scale(1.2);
    }

`