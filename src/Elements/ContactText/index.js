import styled from "styled-components";

const media = { 
    desktop: "@media(min-width: 1080px)",
    tablet: "@media(min-width: 768px)"
 };

export const ContactText = styled.div`
    .contact-image {
        width: 195px;
        border-radius: 50%;
    }

    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.02em;
    
    p {
        margin-top: 18px;
    }


    ${media.tablet} {
        font-size: 1.5rem;
        line-height: 1.8rem;
    }

    p {
        margin-top: 30px;
    }

    ${media.desktop} {
        p  {
            margin-top: 40px;
        }
    }
`