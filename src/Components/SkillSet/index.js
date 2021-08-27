import React from 'react'

import SkillItem from '../SkillItem/'

import skills from '../../Assets/Data/skills.json'

function SkillSet({ type }) {
    
    const showSkills = skills[0][type].map(skill => {
        return (
            <SkillItem 
                key={skill.name}
                name={skill.name}
                image={skill.image}
            />
        )
    })


    return (
        <div>
            {showSkills}
        </div>
    )
}

export default SkillSet
