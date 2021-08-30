import React from 'react';

import { SkillSetWrap } from '../../Elements/SkillSetWrap/';

import SkillItem from '../SkillItem/';

import skills from '../../Assets/Data/skills.json';

function SkillSet({ type }) {
    
    const showSkills = skills[0][type].map(skill => {
        return (
            <SkillItem 
                key={skill.name}
                name={skill.name}
                image={skill.image}
            />
        );
    });

    return (
        <SkillSetWrap>
            {showSkills}
        </SkillSetWrap>
    );
};

export default SkillSet;
