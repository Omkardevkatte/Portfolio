import React from 'react'
import Projects from '../../Data/Projects.json' 
import './Project.css'
import github from '../../../public/github.png'
const Project = () => {
  return (
    <section id='Projects' className='project-container'>
        <h2 className='section-title'>Projects</h2>

        <div className='project-content'>
            {Projects.map((project, id) => {
                return(
                    <div className='project-item' key={id}>
                        <div className='img-container'>
                        <img className='project-img' src={project.imgSrc} alt={project.title} />
                        </div>
                        
                        <h2 className='project-title'>{project.title}</h2>
                        <p className='project-description'>{project.description}</p>
                        <ul className='techstack'>
                            {project.techStack.map((tech, id) => {
                                return(
                                    <li className='techstack-list' key={id}>{tech}</li>
                                )
                            })}
                        </ul>

                        <div className='buttons'>
                            <a className='btn-src' href={project.Source}> <img src={github} alt="GitHub Icon" />Source Code</a> 
                        </div>
                    </div>
                )
            })} 
        </div>
    </section>
  )
}

export default Project