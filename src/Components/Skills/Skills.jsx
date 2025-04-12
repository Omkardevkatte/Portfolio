import React from 'react'
import skills from "../../Data/skills.json";
import './Skills.css'


const Skills = () => {
  return (
    <section className='skills-container'>
        <h2 className="section-title">Skills</h2>

         <div className="exp-skills">
                  {skills.map((skill, index) => {
                    return (
                      <div key={index} className="skill">
                        <div className="skill-img-container">
                          <img src={skill.imgsrc} />
                        </div>
                        <p>{skill.title}</p>
                      </div>
                    );
                  })}
                </div>

    </section>
  )
}

export default Skills