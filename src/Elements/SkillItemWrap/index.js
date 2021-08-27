import styled from "styled-components";

const media = { 
    tablet: "@media(min-width: 400px)"
 };

export const SkillItemWrap = styled.article`
    img {
        width: 95px;
        height: 95px;
    }

    ${media.tablet} {
        img {
            width: 120px;
            height: 120px;
        }
    }
`