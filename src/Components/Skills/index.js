import React from 'react'

import { SectionWrap } from '../../Elements/SectionWrap/'

import SectionTitle from '../SectionTitle/'
import SkillsContainer from '../SkillsContainer/'

function Skills({ theme }) {
    return (
        <SectionWrap background={theme.background} color={theme.color}>
            <SectionTitle id="skills" title="Skills" color={theme.color} />
            <SkillsContainer color={theme.color} />
        </SectionWrap>
    )
}

export default Skills
