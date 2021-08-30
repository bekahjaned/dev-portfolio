import styled from "styled-components";

const media = { 
    desktop: "@media(min-width: 1080px)",
    tablet: "@media(min-width: 768px)"
 };

export const ContactWrap = styled.section`
    padding: 0 53px 113px 53px;

    .content {
        margin-top: 17px;
        display: flex;
        flex-direction: column;
    }

    p {
        text-align: left;
        font-size: 1rem;
        line-height: 1.5em;
    }

    p.add-margin {
        margin-bottom: 18px;
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
        margin-top: 55px;
    }

    ${media.tablet} {
        padding: 0 127px 92px 127px;
        
        p {
            font-size: 1.5rem;
            line-height: 1.8rem;
        }

        p.add-margin {
            margin-bottom: 30px;
        }
    }


    ${media.desktop} {
        margin: 0;
        padding: 0 180px 113px 180px;

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

        p.add-margin {
            margin-bottom: 40px;
        }
    }

`