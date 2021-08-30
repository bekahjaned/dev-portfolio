import styled from "styled-components";

const media = { 
    desktop: "@media(min-width: 1080px)",
    tablet: "@media(min-width: 768px)"
 };

export const SectionTitleWrap = styled.div`
    padding-top: 80px;
    width: 135px;

    h2 {
        font-size: 1.5rem;
        color: ${props => props.color};
        
    }

    hr {
        width: 100%;
        height: 4px;
        background: ${props => props.color};
        border-radius: 2px;
        border: 0 none;
    }

    [data-aos="line-grows"] {
        transform: scaleX(0);
        transform-origin: bottom left;
        transition-property: transform;
    }
      
    [data-aos="line-grows"].aos-animate {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    ${media.tablet} {
        padding-top: 92px;
        width: 145px;
    }

    h2 {
        font-size: 2rem;
    }
    
    ${media.desktop} {
        padding-top: 113px;
        width: 165px;

        h2 {
            font-size: 2.5rem;
        } 
    }
       
`

