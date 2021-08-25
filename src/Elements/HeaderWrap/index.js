import styled from 'styled-components'

const media = { 
    desktop: "@media(min-width: 1080px)",
    tablet: "@media(min-width: 768px)"
 };

 export const HeaderWrap = styled.header`
    margin: 139px 0;
    padding: 0 53px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.background};
    color: ${props => props.color};

    .header-text {
        text-align: center;
        order: 2;
    }

    h1 {
        font-size: 1.7rem;
        font-weight: bold;
        margin-top: 45px;
    }

    p {
        text-align: center;
        line-height: 1.5rem;
        margin-top: 10px;
    }

    img {
        width: 196px;
        height: 196px;
        border-radius: 50%;
        order: 1;
    }

    ${media.tablet} {
        padding: 0 127px;

        h1 {
            font-size: 2.6rem;
        }

        p {
            font-size: 1.5rem;
            line-height: 2rem;
        }

        img {
            width: 244px;
            height: 244px;
        }
    }

    ${media.desktop} {
        margin: 0;
        padding: 0 180px;
        flex-direction: row;
        height: 100vh;
        min-height: 800px;

        .header-text {
            text-align: left;
            order: 1;
        }

        h1 {
            margin: 0;
            font-size: 4rem;
        }

        p {
            margin-top: 40px;
            text-align: left;
            font-size: 2rem;
            line-height: 1.5em;
        }

        img {
            margin-left: 100px;
            width: 300px;
            height: 300px;
            order: 2;
        }
    }
 `