import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header >
      <div className="container header__container" id='home'>
        <h5>Hola soy</h5>
        <h1>Esteban Márquez</h1>
        <h5 className="text-light">Desarrollador Web</h5>
      <CTA />
      <HeaderSocials/>
      
      <div className="me">
        <img src={ME} className="me__image" alt="Me" />
      </div>
      </div>
      <a href="#contact" className='scroll__down'>¡ Da Scroll !</a>

    </header>
  )
}

export default Header