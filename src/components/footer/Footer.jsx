import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <a href="#home" className='footer__title'>Esteban Márquez</a>

      <ul className='permalinks'>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Acerca de mí</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </footer>
  )
}

export default Footer