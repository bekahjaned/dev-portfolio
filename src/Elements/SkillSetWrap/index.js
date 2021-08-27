import styled from "styled-components";

const media = { 
    bigDesktop: "@media(min-width: 1560px)",
    midDesktop: "@media(min-width: 1400px)",
    desktop: "@media(min-width: 1200px)",
    smallDesktop: "@media(min-width: 940px)",
    tablet: "@media(min-width: 600px)"
 };

export const SkillSetWrap = styled.article`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 60px;
    grid-row-gap: 30px;
    justify-content: start;

    ${media.tablet} {
        grid-template-columns: repeat(3, auto);
    }

    ${media.smallDesktop} {
        grid-template-columns: repeat(4, auto);
    }

    ${media.desktop} {
        grid-template-columns: repeat(5, auto);
    }

    ${media.midDesktop} {
        grid-template-columns: repeat(6, auto);
    }

    ${media.bigDesktop} {
        grid-template-columns: repeat(7, auto);
    }
`