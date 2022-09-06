import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import image1 from './image/image1.jpg'
import image2 from './image/image2.jpg'
import image3 from './image/image3.jpg'
import image4 from './image/image4.jpg'
import image5 from './image/image5.jpg'


const ProjectPage = () => {
    return (
        <div className='box-section container'>
            <div className="project-container">
                <div className="project-title">
                    <h2><span>OUR</span> PROJECTS</h2>  
                </div>
                <div className="project-description">
                    <div className='vw portrait'><img  src={image1} alt="" /></div>
                    <div className='vw landscape'><img src={image3} alt="" /></div>
                    <div className='vw'><img src={image2} alt="" /></div>
                    <div className='vw'><img src={image5} alt="" /></div>

                </div>
                <div className="project-button">
                    <Link to={`project/`} className="project-btn" >
                        view more <FontAwesomeIcon className='btn-icon' icon={faArrowRightLong} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage