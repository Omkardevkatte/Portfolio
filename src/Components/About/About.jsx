import React from 'react'
import './About.css'
import image from '../../../public/Developer.png';
import frontEnd from '../../../public/frontend.png'
import backEnd from '../../../public/Backend.png'
import ui from '../../../public/Ui.png'

const About = () => {
  return (
    <section id='about' className='about-container'>
        <h2 className='section-title'>About Me</h2>

        <div className='about-content'>
            <img className='image' src={image} alt="Me Sitting with a laptop" />



            <ul className='about-list'>
                <li className='about-item'><img src={frontEnd} alt="" />
                <div className='about-item-content'>
                    <h3>Frontend Developer</h3>
                    <p>Frontend Developer with experience in building responsive and optimized websites</p>
                </div>
                </li>

                <li className='about-item'><img src={backEnd} alt="" />
                <div className='about-item-content' >
                    <h3>Backend Developer</h3>
                    <p>Backend Developer with experience in Developing fast and optimized backend system & APIs</p>
                </div>
                </li>

                <li className='about-item'><img src={ui} alt="" />
                <div className='about-item-content'>
                    <h3>UI Designer</h3>
                    <p>I have experience in designing multiple website UI for my international clients</p>
                </div>
                </li>
            </ul>
        </div>


    </section>
  )
}

export default About