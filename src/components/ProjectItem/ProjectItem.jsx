import React from 'react'

const ProjectItem = ({project}) => {
    
    return (
        <div className=''>
            <div className="row card-project">
                <div className="col-6 card-project-img">
                    <img src="" alt="" />
                </div>
                <div className="col-6 card-project-body">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem