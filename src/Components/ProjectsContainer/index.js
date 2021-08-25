import React from 'react'

import { ProjectsContainerWrap } from '../../Elements/ProjectsContainerWrap/'

import ProjectCard from '../ProjectCard'

import projects from '../../Assets/Data/projects.json'

function ProjectsContainer() {
    
    const showProjects = projects.map(project => {
        return (
            <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                live={project.live}
                github={project.github}
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
