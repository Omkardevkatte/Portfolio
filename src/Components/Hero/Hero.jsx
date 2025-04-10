import React from "react";
import image from '../../assets/Developer.png';
import './Hero.css'

const Hero = () => {
  return (
    <section className="container">
      <div className="content">
        <h1 className="heroTitle">
          Hi, I'm <span className="name">Omkar</span>
        </h1>
        <p className="description">
          I'm a software engineer with a passion for building web applications.
        </p>
        <a href="#Contact" className="contactBtn">
          Contact Me
        </a>
      </div>
      <img src={image} alt="Developer" className="heroImg" />
      <div className="topBlur"></div>
      <div className="bottomBlur"></div>
    </section>
  );
};

export default Hero;
