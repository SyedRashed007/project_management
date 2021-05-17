import React from 'react'

function ProjectDetails(props) {

    // console.log(props)
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusamus consectetur quam doloribus, earum quaerat aut repellat, pariatur excepturi beatae quibusdam impedit maiores corrupti illum fuga repellendus corporis odio! Officiis.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Syed Rashed</div>
                    <div>18th May 2021</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
