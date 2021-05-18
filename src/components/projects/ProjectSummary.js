import React from 'react'



const ProjectSummary = ({project}) => {
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <h4 className="card-title">{project.title}</h4>
                <p>Posted by Syed Rashed</p>
                <p className="grey-text">18th May, 2021</p>
            </div>
        </div>
    )
}
export default ProjectSummary