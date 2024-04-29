import './modal.css'
import HeaderTherapyWebp from '../../assets/headerTherapy.webp'
import HeaderTherapyPng from '../../assets/headerTherapy.png'
import aboutScreenWebp from '../../assets/aboutScreen.webp'
import aboutScreenPng from '../../assets/aboutScreen.png'
import bienesRaicesWebp from '../../assets/headerBienesRaices.webp'
import bienesRaicesPng from '../../assets/headerBienesRaices.png'
import blogScreenWebp from '../../assets/blogScreen.webp'
import blogScreenPng from '../../assets/blogScreen.png'
import contactScreenWebp from '../../assets/contactScreen.webp'
import contactScreenPng from '../../assets/contactScreen.png'
import moreAboutUsBienesRaicesWebp from '../../assets/moreAboutUsBienesRaices.webp'
import moreAboutUsBienesRaicesPng from '../../assets/moreAboutUsBienesRaices.png'
import layoutBlogBienesRaicesWebp from '../../assets/layoutBlogBienesRaices.webp'
import layoutBlogBienesRaicesPng from '../../assets/layoutBlogBienesRaices.png'
import footerBienesRaicesWebp from '../../assets/footerBienesRaices.webp'
import footerBienesRaicesPng from '../../assets/layoutBlogBienesRaices.png'

const Modal = ({id, onClose}) => {
    const data = {
         bienesraices: {
           imagewebp: [bienesRaicesWebp, moreAboutUsBienesRaicesWebp, layoutBlogBienesRaicesWebp, footerBienesRaicesWebp],
           imagepng: [bienesRaicesPng, moreAboutUsBienesRaicesPng, layoutBlogBienesRaicesPng, footerBienesRaicesPng],
           descripcion: 'Desarrollé un sitio web de bienes raíces con un diseño personalizado y moderno. Utilicé tecnologías como PHP para el backend y MySQL como base de datos. Implementé una interfaz intuitiva para subir propiedades, incluyendo descripciones detalladas y la información del vendedor. Además, utilicé el preprocesador de CSS SASS.'
         },
         arttherapywebsite: {
           imagewebp: [HeaderTherapyWebp, aboutScreenWebp, blogScreenWebp, contactScreenWebp],
           imagepng: [HeaderTherapyPng, aboutScreenPng, blogScreenPng, contactScreenPng],
           descripcion: 'Hice un sitio para una terapeuta en la que se promociona el lanzamiento de un libro, además de sus servicios, esta página trae un blog y su CRM para la administración de este, utilicé PHP para el backend y MySQL para las bases de datos.'
         }
    }
  return (
    <div className='portfolio__item-modal'>
    <div className='portfolio__item-modal--container'>
    
        <div className="portfolio__item-modal--image" >
                <picture>
                <source srcSet={id === 'bienesraices' ? data.bienesraices.imagewebp[0] : data.arttherapywebsite.imagewebp[0]} type='image/webp'/>
                <source srcSet={id === 'bienesraices' ? data.bienesraices.imagepng[0] : data.arttherapywebsite.imagepng[0]} type='image/png'/> 
                <img src={id === 'bienesraices' ? data.bienesraices.imagepng[0] : data.arttherapywebsite.imagepng[0]} alt="Frontpage Therapy" />
                </picture>
                <picture>
                <source srcSet={id === 'bienesraices' ? data.bienesraices.imagewebp[1] : data.arttherapywebsite.imagewebp[1]} type='image/webp'/>
                <source srcSet={id === 'bienesraices' ? data.bienesraices.imagepng[1] : data.arttherapywebsite.imagepng[1]} type='image/png'/> 
                <img src={id === 'bienesraices' ? data.bienesraices.imagepng[1] : data.arttherapywebsite.imagepng[1]} alt="Frontpage Therapy" />
                </picture>
                <picture>
                <source srcSet={id === 'bienesraices' ? data.bienesraices.imagewebp[2] : data.arttherapywebsite.imagewebp[2]} type='image/webp'/>
                <source srcSet={id === 'bienesraices' ? data.bienesraices.imagepng[2] : data.arttherapywebsite.imagepng[2]} type='image/png'/> 
                <img src={id === 'bienesraices' ? data.bienesraices.imagepng[2] : data.arttherapywebsite.imagepng[2]} alt="Frontpage Therapy" />
                </picture>
                <picture>
                <source srcSet={id === 'bienesraices' ? data.bienesraices.imagewebp[3] : data.arttherapywebsite.imagewebp[3]} type='image/webp'/>
                <source srcSet={id === 'bienesraices' ? data.bienesraices.imagepng[3] : data.arttherapywebsite.imagepng[3]} type='image/png'/> 
                <img src={id === 'bienesraices' ? data.bienesraices.imagepng[3] : data.arttherapywebsite.imagepng[3]} alt="Frontpage Therapy" />
                </picture>
        </div>

        <div className='portfolio__item-modal--content'>

            <div className="right">
                <p className='btn-close' onClick={onClose}>X</p>
            </div>
            <p>{id === 'bienesraices' ? data.bienesraices.descripcion : data.arttherapywebsite.descripcion}</p>
        </div>
    </div>
    </div>
  )
}

export default Modal