import React from 'react'

import { SkillItemWrap } from '../../Elements/SkillItemWrap/'

function SkillItem({ name, image }) {
    console.log(name, image)
    return (
        <SkillItemWrap>
            <img alt={name} src={ require(`../../Assets/Skills/${image}.svg`).default } />
        </SkillItemWrap>
    )
}

export default SkillItem
