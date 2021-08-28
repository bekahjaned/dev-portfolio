import styled from "styled-components";

const media = { 
    desktop: "@media(min-width: 1080px)",
    tablet: "@media(min-width: 768px)"
 };

export const FooterWrap = styled.footer`
    width: 100%;
    height: 40px;
    background-color: #0B3B40;
    color: #FBFEF9;
    display: flex;
    align-items: center;

    p {
        padding-left: 53px;
    }

    ${media.tablet} {
        height: 50px;
        
        p {
            padding-left: 127px;
        }
    }

    ${media.desktop} {
        p {
            padding-left: 180px;
        }
    }
`