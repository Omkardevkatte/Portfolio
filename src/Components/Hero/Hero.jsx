import React from "react";
// import image from "../../../public/Developer.png";
import "./Hero.css";
import icon from "../../../public/contact.png";
import cvIcon from '../../../public/Share-icon.png'
import omkar from '../../../public/Omkar-img.png'
import Resume from '../../../public/Omkar_Devkatte_Fresher 2024.pdf'

const Hero = () => {
  return (
    <section className="container">
      <div className="content">
        <h1 className="heroTitle">
          Hi, I'm <span className="name">Omkar</span>
        </h1>
        <h3> <i>Fullstack Developer</i> </h3>
        <p className="description">
        Recent Computer Engineering graduate with a strong foundation in Java, databases, and web development, 
complemented by hands-on project work and freelance experience. Seeking a challenging opportunity to 
contribute technical and communication skills in a product-focused environment. 
        </p>

        <div className="btn-container">
          <div className="button">
            <img src={icon} alt="Contact Icon" />
            <a  href="#Contact">Contact Me</a>
          </div>

          <div className="button2">
            <img src={cvIcon} alt="Contact Icon" />
            <a target="_blank" href={Resume}>Download Resume</a>
          </div>
             </div>
      </div>
      <img src={omkar} alt="Developer" className="heroImg" />
    </section>
  );
};

export default Hero;
