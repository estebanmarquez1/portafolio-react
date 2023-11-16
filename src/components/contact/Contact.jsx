import { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_97vgboi', 'template_l98a3pv', form.current, 'AK4dBPg0Mk9NcS1gh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Ponte en</h5>
      <h2>Contacto conmigo</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>marquezriosesteban@gmail.com</h5>
            <a href="mailto:marquezriosesteban@gmail.com" target='_blank'>Envíame un mensaje</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+52 55 1898 4242</h5>
            <a href="https://api.whatsapp.com/send?phone=525518984242" target='_blank'>Envíame un mensaje</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="nombre" id="name" placeholder='Ingresa tu nombre...' required/>
          <input type="email" name="email" id="email" placeholder='Ingresa tu correo electrónico...' required/>
          <textarea name="message" id="message" placeholder='Escribe tu mensaje...' required></textarea>
          <input type="submit" className='btn btn-primary' value='Enviar mensaje'/>
        </form>
      </div>
    </section>
  )
}

export default Contact