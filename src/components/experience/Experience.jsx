import './experience.css'
import {IoLogoJavascript, IoLogoCss3} from 'react-icons/io'
import { SiTailwindcss, SiPhp} from "react-icons/si";
import {GrReactjs} from 'react-icons/gr'
import { SiAstro } from "react-icons/si";
import {FaSass} from 'react-icons/fa'
import MysqlIconPng from '../../assets/mysql-icon.svg'
import AstroIconPng from '../../assets/astro-icon.png'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Tecnologías </h5>
      <h2>Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo frontend</h3> 
          <div className="experience__content">
          <article className="experience__details">
            <IoLogoCss3 className='experience__details-icon css'/>
              <div>
              <h4>CSS</h4>
              <p className='sentence'>Experimentado</p>
              </div>
            </article>

            <article className="experience__details">
            <IoLogoJavascript className='experience__details-icon javascript'/>
              <div>
              <h4>Javascript</h4>
              <p className='sentence'>Intermedio</p>
              </div>
            </article>

            <article className="experience__details">
            <GrReactjs className='experience__details-icon react'/>
              <div>
              <h4>React</h4>
              <p className='sentence'>Intermedio</p>
              </div>
            </article>

            <article className="experience__details">
            <FaSass className='experience__details-icon sass'/>
              <div>
              <h4>Sass</h4>
              <p className='sentence'>Experimentado</p>
              </div>
            </article>

            <article className="experience__details">
            <SiTailwindcss className='experience__details-icon react'/>
              <div>
              <h4>Tailwind CSS</h4>
              <p className='sentence'>Experimentado</p>
              </div>
            </article>

            <article className="experience__details">
            <img src={AstroIconPng}/>
              <div>
              <h4>Astro</h4>
              <p className='sentence'>Experimentado</p>
              </div>
            </article>
          </div>
        </div>
                    {/* End Frontend */}
        <div className="experience__backend">
          <h3>Desarrollo backend</h3>
          <div className="experience__content">
          <article className="experience__details">
            <SiPhp className='experience__details-icon php'/>
              <div>
              <h4>PHP</h4>
              <p className='sentence'>Intermedio</p>
              </div>
            </article>

            <article className="experience__details">
            <img src={MysqlIconPng} className='mysql-icon' alt='mysql-icon'/>
              <div>
              <h4>MySQL</h4>
              <p className='sentence'>Experimentado</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience