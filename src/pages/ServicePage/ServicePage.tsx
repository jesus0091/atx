import React from 'react'

const ServicePage = () => {
  const services = ["Service 1", "Service 2", "Service 3"];
  return (
    <div className='box-section service_page'>
      <div>
        <h2>OUR <span>SERVICE</span></h2>
      </div>
      <div>
        {services.map((service)=>{
            return (
              <div>
                {service}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ServicePage