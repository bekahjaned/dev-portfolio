import React from 'react'

import { ProjectCardWrap } from '../../Elements/ProjectCardWrap/'

function ProjectCard({ title, image, description, live, github }) {
    return (
        <ProjectCardWrap>
            <img alt="web app" src={ require(`../../Assets/ProjectCard/${image}.png`).default }/>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links"><a rel="noreferrer" target="_blank" href={live}>Live</a><span> | </span><a rel="noreferrer" target="_blank" href={github}>GitHub</a></div>
        </ProjectCardWrap>
    )
}

export default ProjectCard