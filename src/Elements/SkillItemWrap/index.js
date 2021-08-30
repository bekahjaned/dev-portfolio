import styled from "styled-components";

const media = { 
    desktop: "@media(min-width: 1080px)",
    tablet: "@media(min-width: 400px)"
 };

export const SkillItemWrap = styled.article`
    .tooltip {
        font-size: 0.5rem;
        font-family: helvetica, san-serif;
        letter-spacing: 0.02em;
    }

    img {
        width: 95px;
        height: 95px;
    }

    p.skill-name {
        padding-top: 10px;
        text-align: center;
    }

    ${media.tablet} {
        .tooltip {
            font-size: 1.1rem;
            letter-spacing: 0.05em;
        }

        img {
            width: 120px;
            height: 120px;
        }
    }

    ${media.desktop} {
        p.skill-name {
            display: none;
        }
    }
`