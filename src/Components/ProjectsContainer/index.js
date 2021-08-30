import React from 'react';

import { ProjectsContainerWrap } from '../../Elements/ProjectsContainerWrap/';

import ProjectCard from '../ProjectCard';

import projects from '../../Assets/Data/projects.json';

function ProjectsContainer({ color, linkColor, hover }) {
    
    const showProjects = projects.map(project => {
        return (
            <ProjectCard
                key={project.title}
                title={project.title}
                image={project.image}
                description={project.description}
                live={project.live}
                github={project.github}
                color={color}
                linkColor={linkColor}
                hover={hover}
            />
        );
    });

    return (
        <ProjectsContainerWrap>
            {showProjects}
        </ProjectsContainerWrap>
    );
};

export default ProjectsContainer;
