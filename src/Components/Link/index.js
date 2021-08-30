import React from 'react';

import { LinkWrap } from '../../Elements/LinkWrap/';

function Link({ url, text, color, hover }) {
    return (
        <LinkWrap color={color} hover={hover}>
            <a rel="noreferrer" target="_blank" href={url}>{text}</a>
        </LinkWrap>
    );
};

export default Link;
