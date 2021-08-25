import React from 'react'

import { SectionWrap } from '../../Elements/SectionWrap'

import SectionTitle from '../SectionTitle'

function Work({ theme }) {
    return (
        <SectionWrap background={theme.background} color={theme.color}>
            <SectionTitle id="work" title="Work" color={theme.color} />
        </SectionWrap>
    )
}

export default Work
