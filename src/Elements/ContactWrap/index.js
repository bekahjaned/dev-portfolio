import styled from "styled-components";

const media = { 
    desktop: "@media(min-width: 1080px)",
    tablet: "@media(min-width: 768px)"
 };

export const ContactWrap = styled.section`
    padding: 0 53px;
    padding-bottom: 113px;

    .content {
        margin-top: 17px;
        display: flex;
        flex-direction: column;
    }

    p {
        text-align: left;
        font-size: 1rem;
        line-height: 1.5em;
        margin-bottom: 17px;
    }

    .text-group {
        order: 1;
    }

    img.contact-image {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        order: 2;
        align-self: center;
        margin-top: 25px;
    }

    ${media.tablet} {
        padding: 0 127px;
        padding-bottom: 113px;

        p {
            font-size: 1.5rem;
            line-height: 1.333em;
        }
    }


    ${media.desktop} {
        margin: 0;
        padding: 0 180px;
        padding-bottom: 113px;

        .content {
            margin-top: 45px;
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        img.contact-image {
            width: 197px;
            height: 197px;
            margin-top: 0;
            margin-right: 72px;
            order: 1;
        }

        .text-group {
            order: 2;
        }

        p {
            margin-bottom: 25px;
        }
    }

`