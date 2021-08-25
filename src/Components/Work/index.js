import React from 'react'

import { SectionWrap } from '../../Elements/SectionWrap'

import SectionTitle from '../SectionTitle'
import ProjectCard from '../ProjectCard/'

function Work({ theme }) {
    return (
        <SectionWrap background={theme.background} color={theme.color}>
            <SectionTitle id="work" title="Work" color={theme.color} />
            <ProjectCard />
        </SectionWrap>
    )
}

export default Work
