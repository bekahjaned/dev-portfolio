import styled from 'styled-components'

const media = { 
    desktop: "@media(min-width: 1080px)",
    tablet: "@media(min-width: 768px)"
 };

export const NavBarWrap = styled.nav`
    width: 100vw;
    height: 50px;
    background-color: #0B3B40;
    display: flex;
    align-items: center;
    justify-content: right;

    .nav-links {
        padding-right: 35px; 
    }

    a {
        color: #FBFEF9;
        text-decoration: none;
        padding-left: 18px;
        font-size: 0.75rem;
    }

    a:hover {
        color: #ECEF4C;
    }

    ${media.tablet} {
        .nav-links {
            padding-right: 84px;  
        } 

        a {
            font-size: 0.875rem;
            padding-left: 20px;
        }
    }

    ${media.desktop} {
        .nav-links {
            padding-right: 180px;  
        }

        a {
            font-size: 1rem;
            padding-left: 22px;
        }
    
}
`