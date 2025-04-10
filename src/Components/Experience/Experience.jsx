import React from "react";
import skills from "../../Data/skills.json";
import History from "../../Data/History.json"
import './Experience.css'

const Experience = () => {
  return (
    <section id="Experience" className="exp-container">
      <h2 className="exp-title">Experience</h2>
      <div className="exp-content">
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
        <ul className="history">
        {History.map((history, id) => {
                return(
                    <li key={id} className="history-item">
                            <img src={history.imgsrc} alt="" />
                            <div className="history-item-details">
                                <h3>{`${history.role}, ${history.org}`}</h3>
                                <p>{`${history.startDate} - ${history.endDate}`}</p>
                                <ul>{history.experience.map((exp,id) => {
                                    return (
                                        <li key={id}>{exp}</li>
                                    )
                                })}</ul>
                            </div>
                    </li>
                )
            })}
          </ul>
      </div>
    </section>
  );
};

export default Experience;
