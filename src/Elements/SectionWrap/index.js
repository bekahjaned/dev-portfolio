import styled from "styled-components";

const media = { 
    desktop: "@media(min-width: 1080px)",
    tablet: "@media(min-width: 768px)"
 };

export const SectionWrap = styled.section`
    padding: 0 53px 80px 53px;
    background-color: ${props => props.background};
    color: ${props => props.color};

    ${media.tablet} {
        padding: 0 127px 92px 127px;
    }

    ${media.desktop} {
        padding: 0 180px 113px 180px;
        margin: 0;
        height: 100%;
    }
`