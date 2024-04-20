import './services.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>Lo que ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Landing pages</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Diseño centrado en la experiencia del usuario (UX) para garantizar una navegación intuitiva y una interfaz atractiva.</p>
            </li>
          </ul>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Optimización de la velocidad de carga y la adaptabilidad a dispositivos móviles.</p>
            </li>
          </ul>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Seguimiento y análisis de datos para mejorar continuamente el rendimiento de tu landing page.</p>
            </li>
          </ul>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Desarrollo de contenido persuasivo que convierte visitantes en clientes potenciales.</p>
            </li>
          </ul>
        </article>
                  {/* End Landing Pages */}
        <article className="service">
          <div className="service__head">
            <h3>Web apps</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Aplicaciones web a medida para satisfacer tus necesidades específicas.</p>
            </li>
          </ul>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Diseños de experiencia de usuario intuitiva y atractiva para aumentar la retención y la satisfacción.</p>
            </li>
          </ul>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Servicios de mantenimiento continuo y soporte técnico para garantizar un rendimiento óptimo.</p>
            </li>
          </ul>
          
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Servicios de integración de tus aplicaciones web con sistemas de terceros.</p>
            </li>
          </ul>

     
        </article>
          {/* End of Web Apps */}
        <article className="service">
          <div className="service__head">
            <h3>E-commerce Website</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Desarrollo de sitios web para tiendas o comercios en línea que se adaptan a dispositivos móviles y de escritorio.</p>
            </li>
          </ul>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Administración y actualización eficaz de tu catálogo de productos en línea.</p>
            </li>
          </ul>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Implementación de soluciones de procesamiento de pagos seguras y fáciles de usar.</p>
            </li>
          </ul>
          
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
              <p>Mejora de la experiencia de compra para impulsar ventas.</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services