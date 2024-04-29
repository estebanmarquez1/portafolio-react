import { useState } from 'react'
import './portfolio.css'
import {TbWorld} from 'react-icons/tb'
import {FaGithub} from 'react-icons/fa'
import {FaSass} from 'react-icons/fa'
import {SiPhp, SiTypescript} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import HeaderBienesRaicesWebp from '../../assets/headerBienesRaices.webp'
import HeaderBienesRaicesPng from '../../assets/headerBienesRaices.png'
import HeaderTherapyWebp from '../../assets/headerTherapy.webp'
import HeaderTherapyPng from '../../assets/headerTherapy.png'
import HeaderPacientesWebp from '../../assets/headerPacientes.webp'
import HeaderPacientesPng from '../../assets/headerPacientes.png'
import HeaderTiendaWebp from '../../assets/headerTienda.webp'
import HeaderTiendaPng from '../../assets/headerTienda.png'
import MysqlIconPng from '../../assets/mysql-icon.svg'
import Modal from '../modal/Modal'



  const Portfolio = () => {
    
    const [modal, setModal] = useState(false);
    const [selectedModalId, setSelectedModalId] = useState(null);
    const nav = document.querySelector('nav');
    const llamarModal = (id) => {
      setSelectedModalId(id);
      setModal(true);
      document.body.style.overflow = 'hidden';
      nav.style.visibility = 'hidden';
    };
  
    const closeModal = () => {
      setSelectedModalId(null);
      setModal(false);
      document.body.style.overflow = '';
      nav.style.visibility = 'visible';
    };

   
  return (
    <section id="portfolio">
      <h5>Mis últimos trabajos</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
        <div className="portfolio__item-image">
            <div className='portfolio__item-description'>
              <div className='portfolio__item-techIcons'>
                <FaSass className='experience__details-icon sass'/>
                <SiPhp className='experience__details-icon php'/>
                <img src={MysqlIconPng} className='mysql-icon' alt='mysql-icon'/>
              </div>
              <button onClick={() => llamarModal('bienesraices')} className="btn btn-primary">Descripción</button>
            </div>
          <picture>
            <source srcSet={HeaderBienesRaicesWebp} type='image/webp'/>
            <source srcSet={HeaderBienesRaicesPng} type='image/png'/> 
            <img src={HeaderBienesRaicesPng} alt="Frontpage Bienes Raices" />
            </picture>
        </div>
          <h3>Bienes Raíces</h3>
           <a href="http://18.209.4.56/" className="btn" target='_blank'><TbWorld className='portfolio__item-icon'/>Website</a>
          <a href="https://github.com/estebanmarquez1/bienesraices" className="btn btn-primary" target='_blank'><FaGithub/>Repository</a> 
          
              
        </article>

        <article className="portfolio__item">
        <div className="portfolio__item-image">
          <div className='portfolio__item-description'>
              <div className='portfolio__item-techIcons'>
                <FaSass className='experience__details-icon sass'/>
                <SiPhp className='experience__details-icon php'/>
                <img src={MysqlIconPng} className='mysql-icon' alt='mysql-icon'/>
              </div>
              <button onClick={() => llamarModal('arttherapywebsite')} className="btn btn-primary">
                Descripción
              </button>
            </div>
        <picture>
            <source srcSet={HeaderTherapyWebp} type='image/webp'/>
            <source srcSet={HeaderTherapyPng} type='image/png'/> 
            <img src={HeaderTherapyPng} alt="Frontpage Therapy" />
            </picture>
        </div>
          <h3>Página para terapeuta</h3>
          <a href="http://34.229.58.22/" className="btn" target='_blank'><TbWorld className='portfolio__item-icon'/>Website</a>
          <a href="https://github.com/estebanmarquez1/therapywebsite" className="btn btn-primary" target='_blank'><FaGithub/>Repository</a>
        </article>

        <article className="portfolio__item">
        <div className="portfolio__item-image">
          <div className='portfolio__item-description'>
              <div className='portfolio__item-techIcons'>
                <GrReactjs className='experience__details-icon react'/>
              </div>
              <a href="https://github.com/estebanmarquez1/administradorPacientes" className="btn btn-primary">
                Descripción
              </a>
            </div>
        <picture>
            <source srcSet={HeaderPacientesWebp} type='image/webp'/>
            <source srcSet={HeaderPacientesPng} type='image/png'/> 
            <img src={HeaderPacientesPng} alt="Frontpage Therapy" />
            </picture>
        </div>
          <h3>Administrador de Pacientes con React</h3>
          <a href="https://662d6a04a1df6c263238b19b--coruscating-halva-15190c.netlify.app/" className="btn" target='_blank'><TbWorld className='portfolio__item-icon'/>Website</a>
          <a href="https://github.com/estebanmarquez1/administradorPacientes" className="btn btn-primary" target='_blank'><FaGithub/>Repository</a>
        </article>

        <article className="portfolio__item">
        <div className="portfolio__item-image">
          <div className='portfolio__item-description'>
              <div className='portfolio__item-techIcons'>
                <GrReactjs className='experience__details-icon react'/>
                <SiTypescript className='experience__details-icon react'/>
              </div>
              <a href="https://github.com/estebanmarquez1/GuitarLA-TypeScript" className="btn btn-primary">
                Descripción
              </a>
            </div>
        <picture>
            <source srcSet={HeaderTiendaWebp} type='image/webp'/>
            <source srcSet={HeaderTiendaPng} type='image/png'/> 
            <img src={HeaderTiendaPng} alt="Frontpage Therapy" />
            </picture>
        </div>
          <h3>MiniTienda con React</h3>
          <a href="https://fluffy-sfogliatella-c91513.netlify.app/" className="btn" target='_blank'><TbWorld className='portfolio__item-icon'/>Website</a>
          <a href="https://github.com/estebanmarquez1/GuitarLA-TypeScript" className="btn btn-primary" target='_blank'><FaGithub/>Repository</a>
        </article>

      </div>
            {modal && <Modal id={selectedModalId} onClose={closeModal}/>}
          {modal && <div className="overlay" onClick={closeModal}></div>}
    </section>
  )
}

export default Portfolio