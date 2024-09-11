import React, { useState } from 'react';
import projects from './projectData';
import './projects.css';

const ProjectItem = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const itemClass = isExpanded ? 'projectItemDetails expanded' : 'projectItemDetails collapsed';

    return (
        <div className="projectItem" onClick={toggleExpand} style={{ cursor: 'pointer' }}>
            <img src="" alt=""   />
            <h2>{project.name}</h2>
            <div className={itemClass}>
                {isExpanded && (
                    <div>
                        <p>{project.description}</p>
                        <p>Technologies Used: {project.technologies.join(', ')}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                )}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="projectsSection">
            {projects.map(project => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </div>
    );
};

export default Projects;
