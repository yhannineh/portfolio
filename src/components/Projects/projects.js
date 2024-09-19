import React, { useState } from 'react';
import projects from './projectData';
import './projects.css';
import golden from '../../assets/golden.webp'


const ProjectItem = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    

    const toggleExpand = () => setIsExpanded(true);
    const closeExpand = (e) => {
        e.stopPropagation()
        setIsExpanded(false);
    };

    const itemClass = isExpanded ? 'projectItemDetails expanded' : 'projectItemDetails collapsed';

    return (
        <div className="projectItem" onClick={toggleExpand} style={{ cursor: 'pointer' }}>
            <img className="projectImage" src={golden} alt="Golden Slice"   />
            <h2>{project.name}</h2>
            <div className={itemClass}>
                {isExpanded && (
                    <div>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <p>Technologies Used: {project.technologies.join(', ')}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a><br/>
                        <button onClick={closeExpand} className="collapseButton">Collapse</button>
                    </div>
                )}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div id="projectsSection">
            <span className="projectTitle">My Projects</span>
            <p className="projectPara">Below are a few of the projects I have completed over the course of my career. <br/>Click on a project to learn more.</p>
            <div className="projectCards">
                {projects.map(project => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
































// import React, { useState } from 'react';
// import projects from './projectData';
// import './projects.css';
// import golden from '../../assets/golden.webp'


// const ProjectItem = ({ project }) => {
//     const [isExpanded, setIsExpanded] = useState(false);
    

//     const toggleExpand = () => setIsExpanded(!isExpanded);

//     const itemClass = isExpanded ? 'projectItemDetails expanded' : 'projectItemDetails collapsed';

//     return (
//         <div className="projectItem" onClick={toggleExpand} style={{ cursor: 'pointer' }}>
//             <img className="projectImage" src={golden} alt="Golden Slice"   />
//             <h2>{project.name}</h2>
//             <div className={itemClass}>
//                 {isExpanded && (
//                     <div>
//                         <p>{project.description}</p>
//                         <p>Technologies Used: {project.technologies.join(', ')}</p>
//                         <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// const Projects = () => {
//     return (
//         <div className="projectsSection">
//             {projects.map(project => (
//                 <ProjectItem key={project.id} project={project} />
//             ))}
//         </div>
//     );
// };

// export default Projects;