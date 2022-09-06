import React from 'react'
import Picturing from '../../components/Picturing/Picturing'
import experienceimg from './image/experience-img.jpg'

const Experience = () => {

    const experienceArray = [
        {
            id: 1,
            number: "3",
            description: `years of experience`,
        },
        {
            id: 2,
            number: "200",
            description: "done projects",
        },
        {
            id: 3,
            number: "111",
            description: `positive reviews`,
        },
    ]


  return (
    <div className='box-section container'>
        <div className="row">
            <div className="col-5">
                <Picturing img={experienceimg}/>
            </div>
            <div className="col-7 experience-content">
                <div className="experience-title">
                    <h3>We provide you the best <br /> experience</h3>
                </div>
                <div className="experience-body">
                    <p>You don't worry about the results because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and with premium materials</p>
                </div>
                <div className="experience-line">
                    {
                        experienceArray.map((e)=>{
                            return(
                                <div className='experience-date' key={e.id}>
                                    <p className='e-number'><span className='e-plus'>+</span> {e.number}</p>
                                    <p className='e-description'>{e.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience