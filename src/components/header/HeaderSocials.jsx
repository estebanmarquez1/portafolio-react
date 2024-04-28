import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/esteban-m%C3%A1rquez-072243139/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/estebanmarquez1" target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials