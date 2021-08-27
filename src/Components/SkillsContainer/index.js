import React from 'react'

import SkillSet from '../SkillSet/'

function SkillsContainer() {
    return (
        <div>
            <h3>Development:</h3>
            <SkillSet type="development" />
            <h3>Design:</h3>
            <SkillSet type="design" />
        </div>
    )
}

export default SkillsContainer
