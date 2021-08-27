import React from 'react'

import { ProjectCardWrap } from '../../Elements/ProjectCardWrap/'

import Subtitle from '../Subtitle'

function ProjectCard({ title, image, description, live, github, color }) {
    return (
        <ProjectCardWrap>
            <img alt="web app" src={ require(`../../Assets/ProjectCard/${image}.png`).default }/>
            <Subtitle color={color} title={title} />
            <p>{description}</p>
            <div className="project-links"><a rel="noreferrer" target="_blank" href={live}>Live</a><span> | </span><a rel="noreferrer" target="_blank" href={github}>GitHub</a></div>
        </ProjectCardWrap>
    )
}

export default ProjectCard