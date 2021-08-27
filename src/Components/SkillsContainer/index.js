import React from 'react'

import { SkillsContainerWrap } from '../../Elements/SkillsContainerWrap/'

import SkillSet from '../SkillSet/'

function SkillsContainer() {
    return (
        <SkillsContainerWrap>
            <h3>Development:</h3>
            <SkillSet type="development" />
            <h3>Design:</h3>
            <SkillSet type="design" />
        </SkillsContainerWrap>
    )
}

export default SkillsContainer
