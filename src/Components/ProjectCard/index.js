import React from 'react'

import { ProjectCardWrap } from '../../Elements/ProjectCardWrap/'

import TestImage from '../../Assets/ProjectCard/animal-crossing-now.png'

function ProjectCard() {
    return (
        <ProjectCardWrap>
            <img alt="screenshot of app" src={TestImage}/>
            <h3>Animal Crossing Now</h3>
            <p>The app that Animal Crossing fans have been waiting for! This application will display all fish and bugs that can be caught now depending on the user's time, date and hemisphere.</p>
            <div className="project-links"><a rel="noreferrer" target="_blank" href="https://animal-crossing-now.vercel.app/">Live</a><span> | </span><a rel="noreferrer" target="_blank" href="https://github.com/bekahjaned/animal-crossing-now">GitHub</a></div>
        </ProjectCardWrap>
    )
}

export default ProjectCard
