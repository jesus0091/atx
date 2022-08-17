import React from "react";
import { Link } from "react-router-dom";
import ProjectItem from "../ProjectItem/ProjectItem";

const ProjectList = ({ projects }) => {
    return (
        <div className="container">
            {projects.map((project) => {
                return (
                    <Link
                        className="project-link"
                        key={project.id}
                        to={`project/${project.id}`}
                    >
                        <ProjectItem project={project} />
                    </Link>
                );
            })}
        </div>
    );
};

export default ProjectList;
