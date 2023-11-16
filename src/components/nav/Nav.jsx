import { useState, useEffect } from 'react';
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {TbMessage} from 'react-icons/tb'


const Nav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const { top, bottom } = section.getBoundingClientRect();
        if (top < window.innerHeight && bottom >= 0) {
          setActiveSection(section.id);
        }
      });
      if(document.documentElement.scrollTop < 800){
        setActiveSection('');
      }
    } 

    window.addEventListener('scroll', handleScroll);

    
    

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav>
    <a href="#home" className={activeSection === 'home' ? 'active' : ''}><AiOutlineHome/></a>
    <a href="#about" className={(activeSection === 'about') ? 'active' : ''}><AiOutlineUser/></a>
    <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}><BiBookAlt/></a>
    <a href="#services" className={activeSection === 'services' ? 'active' : ''}><RiServiceLine/></a>
    <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}><TbMessage/></a>
  </nav>
  );
}

export default Nav;