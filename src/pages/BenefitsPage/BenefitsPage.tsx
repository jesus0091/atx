import React from 'react'
import BenefitsTimeline from '../../components/BenefitsTimeline/BenefitsTimeline'
import Picturing from '../../components/Picturing/Picturing'
import benefitsimg from './images/benefits-timeline-img.jpg'

const BenefitsPage = () => {
  return (
    <div className='box-section container'>
      <div className="row position-relative">
        <div className="col-md-7">
          <h3 className='benefits-title'>We provide you the best process experience</h3>
          <BenefitsTimeline />
        </div>
        <div className="img-floating">
          <Picturing img={benefitsimg} />
        </div>
      </div>
    </div>
  )
}

export default BenefitsPage