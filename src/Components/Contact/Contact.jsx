import React from 'react'
import './Contact.css'

import linkedin from '../../../public/linkedin.png'
import github from '../../../public/github.png'
import phone from '../../../public/phone-call.png'
import Email from '../../../public/email.png'

const Contact = () => {
  return (
    <section className='contact-container'>
        
        <h2 className='section-title'>Contact Me</h2>

        <div className="contact-content">
        <ul className='contact-list'>

<li>
  <img src={phone} alt="Phone Icon" />
  <span>+919970938376</span>
</li>

<li>
  <img src={Email} alt="Email Icon" />
  <span><a href="mailto:omkardevkatte11@gmail.com">omkardevkatte11@gmail.com</a></span>
</li>

<li>
  <img src={github} alt="GitHub Icon" />
  <span><a href="https://github.com/Omkardevkatte">Github Link</a></span>
</li>

<li>
  <img src={linkedin} alt="LinkedIn Icon" />
  <span> <a href="https://www.linkedin.com/in/omkar-devkatte"> Linkedin URL </a></span>
</li>

</ul>
        </div>

    </section>
  )
}

export default Contact