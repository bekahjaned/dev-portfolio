import styled from "styled-components";

const media = { 
    desktop: "@media(min-width: 1080px)",
    tablet: "@media(min-width: 768px)"
 };

export const AboutText = styled.div`
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.02em;
    
    p, h3 {
        padding-top: 18px;
    }

    ul {
        padding: 5px 0 0 22px;
    }

    a {
        color: #FBFEF9;
    }

    a:hover {
        color: #BE4D79;
    }


    ${media.tablet} {
        font-size: 1.5rem;
        line-height: 1.8rem;
    }

    p, h3 {
        padding-top: 30px;
    }

    ${media.desktop} {
        p, h3 {
            padding-top: 40px;
        }
    }
    
    
`