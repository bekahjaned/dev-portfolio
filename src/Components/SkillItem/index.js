import React from 'react'

function SkillItem({ name, image }) {
    console.log(name, image)
    return (
        <div>
            <img alt={name} src={ require(`../../Assets/Skills/${image}.svg`).default } />
        </div>
    )
}

export default SkillItem
