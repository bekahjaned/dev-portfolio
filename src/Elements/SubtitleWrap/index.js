import styled from "styled-components";

const media = { 
    desktop: "@media(min-width: 1080px)",
    tablet: "@media(min-width: 768px)"
 };

export const SubtitleWrap = styled.article`
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.02em;
    margin-top: 18px;
    color: ${props => props.color};

    ${media.tablet} {
        font-size: 1.5rem;
        line-height: 1.8rem;
        margin-top: 30px;
    }

    ${media.desktop} {
        margin-top: 40px;
    }
`