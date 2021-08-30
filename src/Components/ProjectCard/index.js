import React from 'react';

import { ProjectCardWrap } from '../../Elements/ProjectCardWrap/';

import Subtitle from '../Subtitle';
import Link from '../Link/';

function ProjectCard({ title, image, description, live, github, color, linkColor, hover }) {
    return (
        <ProjectCardWrap>
            <img alt="web app" src={ require(`../../Assets/ProjectCard/${image}.png`).default }/>
            <Subtitle color={color} title={title} />
            <p>{description}</p>
            <div className="project-links"><Link color={linkColor} hover={hover} url={live} text="Live" /><span> | </span> <Link color={linkColor} hover={hover} url={github} text="GitHub" /> </div>
        </ProjectCardWrap>
    );
};

export default ProjectCard;