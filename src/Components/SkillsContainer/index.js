import React from 'react'

import Subtitle from '../Subtitle'
import SkillSet from '../SkillSet/'

function SkillsContainer({ color }) {
    return (
        <div>
            <Subtitle color={color} title="Development:" />
            <SkillSet type="development" />
            <Subtitle color={color} title="Design:" />
            <SkillSet type="design" />
        </div>
    )
}

export default SkillsContainer
