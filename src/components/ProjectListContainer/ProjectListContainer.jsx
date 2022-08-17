import React, { Fragment } from 'react'
import ProjectList from '../ProjectList/ProjectList'
// import projects from '../json/projects.js'

const ProjectListContainer = () => {

        const projects = [
        {
            "id": 1,  
            "name": "Project 1",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem placeat praesentium facere quia distinctio impedit veniam officiis quidem, commodi, quae sequi accusamus vero in omnis delectus obcaecati. Labore, error illum.",
            "fecha": "12-04-2002"
        },
        {
            "id": 2,
            "name": "Project 2",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem placeat praesentium facere quia distinctio impedit veniam officiis quidem, commodi, quae sequi accusamus vero in omnis delectus obcaecati. Labore, error illum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem placeat praesentium facere quia distinctio impedit veniam officiis quidem, commodi, quae sequi accusamus vero in omnis delectus obcaecati. Labore, error illum.",
            "fecha": "12-04-2001"
        },
        {
            "id": 3,  
            "name": "Project 3",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem placeat praesentium facere quia distinctio impedit veniam officiis quidem, commodi, quae sequi accusamus vero in omnis delectus obcaecati. Labore, error illum.",
            "fecha": "12-04-2002"
        },
    ]

    return (
        <Fragment>
            <ProjectList projects={projects} />
        </Fragment>
    )
}

export default ProjectListContainer