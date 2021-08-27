import React from 'react'

import ReactTooltip from "react-tooltip"

import { SkillItemWrap } from '../../Elements/SkillItemWrap/'

function SkillItem({ name, image }) {
    console.log(name, image)
    return (
        <SkillItemWrap>
            <img data-tip={name} alt={name} src={ require(`../../Assets/Skills/${image}.svg`).default } />
            <ReactTooltip className="tooltip" place="right" type="dark" effect="float" />
        </SkillItemWrap>
    )
}

export default SkillItem
