import React from 'react'

import { SubtitleWrap } from '../../Elements/SubtitleWrap/'

function Subtitle({ title, color }) {
    return (
        <SubtitleWrap color={color}>
            <h3>{title}</h3>
        </SubtitleWrap>
    )
}

export default Subtitle
