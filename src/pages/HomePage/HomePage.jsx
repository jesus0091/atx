import React, { Fragment } from 'react'
import AboutPage from '../AboutPage/AboutPage'
import BenefitsPage from '../BenefitsPage/BenefitsPage'
import Experience from '../Experience/Experience'
import ProjectPage from '../ProjectPage/ProjectPage'
import ServicePage from '../ServicePage/ServicePage'

const HomePage = () => {
  return (
    <Fragment>
        <AboutPage />
        <ServicePage />
        <Experience />
        <BenefitsPage />
        <ProjectPage />
    </Fragment>
  )
}

export default HomePage