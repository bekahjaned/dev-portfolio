import styled from "styled-components";

const media = { 
    desktop: "@media(min-width: 1080px)",
    tablet: "@media(min-width: 768px)"
 };

export const ProjectCardWrap = styled.article`
    margin-top: 30px;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.02em;
    width: 100%;

    img {
        width: 100%;
    }

    p, .project-links {
        margin-top: 18px;
    }


    ${media.tablet} {
        font-size: 1.5rem;
        line-height: 1.8rem;

        p, .project-links {
            margin-top: 30px;
        }
    }

    ${media.desktop} {
        width: 48%;
        img {
            width: 100%;
        }

        p, .project-links {
            margin-top: 40px;
            
        }
    }
`