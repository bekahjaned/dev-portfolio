import styled from "styled-components";

export const LinkWrap = styled.span`
    a {
        color: ${props => props.color};
    }

    a:hover {
        color: ${props => props.hover};
    }
`