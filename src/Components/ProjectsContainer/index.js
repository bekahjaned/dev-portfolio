import React from 'react'

import { ProjectsContainerWrap } from '../../Elements/ProjectsContainerWrap/'

import ProjectCard from '../ProjectCard'

import projects from '../../Assets/Data/projects.json'

function ProjectsContainer() {
    
    const showProjects = projects.map(project => {
        return (
            <ProjectCard
                key={project.title}
                title={project.title}
                image={project.image}
                description={project.description}
                live={project.live}
                github={project.github}
                color="#0A100D"
            />
        )
    })
    return (
        <ProjectsContainerWrap>
            {showProjects}
        </ProjectsContainerWrap>
    )
}

export default ProjectsContainer
