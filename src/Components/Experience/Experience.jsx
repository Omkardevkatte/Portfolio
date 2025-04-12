import React from "react";
// import skills from "../../Data/skills.json";
import History from "../../Data/History.json"
import './Experience.css'

const Experience = () => {
  return (
    <section id="Experience" className="exp-container">
      <h2 className="section-title">Experience</h2>
      <div className="exp-content">
       
        <ul className="history">
        {History.map((history, id) => {
                return(
                    <li key={id} className="history-item">
                            <img src={history.imgsrc} alt="Company-logo" />
                            <div className="history-item-details">
                                <h3>{`${history.role} ${history.org}`}</h3>
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
