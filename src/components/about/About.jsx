import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { TbAwardFilled } from 'react-icons/tb'
// import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Conoce</h5>
      <h2>Más sobre mí</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAwardFilled className='about__icon' />
              <h5>Experiencia</h5>
              <p className='sentence'>3+ Years Experience</p>
            </article>



            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Proyectos</h5>
              <p className='sentence'>30+ projects</p>
            </article>
          </div>
            <p>
            Soy un desarrollador frontend altamente motivado. Mi enfoque se centra en la creación de experiencias de usuario atractivas y de alta calidad. He estado desarrollando aplicaciones web de manera freelance.
            </p>
            <a href="#contact" className='btn btn-primary'>Contáctame</a>
        </div>
      </div>
    </section>
  )
}

export default About