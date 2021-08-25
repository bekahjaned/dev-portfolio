import styled from "styled-components";

const media = { 
    desktop: "@media(min-width: 1080px)",
    tablet: "@media(min-width: 768px)"
 };

export const ProjectsContainerWrap = styled.div`
    display: flex;
    flex-direction: column;

    ${media.desktop} {
        flex-direction: row;
        justify-content: space-between;
    }
`