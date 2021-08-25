import React from 'react'

import { ProjectsContainerWrap } from '../../Elements/ProjectsContainerWrap/'

import ProjectCard from '../ProjectCard'

// this can house the mapping function for showing project info

function ProjectsContainer() {
    return (
        <ProjectsContainerWrap>
            <ProjectCard />
            <ProjectCard />
        </ProjectsContainerWrap>
    )
}

export default ProjectsContainer
