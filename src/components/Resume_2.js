import React from "react";
import "../styles/Resume_2.css";

function Resume_2(props) {
  return (
    <div className="ResumeContainer">
      <div className="Experience">
        {props.position.length || props.employer.length > 0 ? (
          <h2 className="positonHeader">გამოცდილება</h2>
        ) : null}
      </div>
      <div className="Position">
        <p className="Myposition">{props.position}</p>
      </div>
      <div className="workPlace">
        <p className="Myemployer">{props.employer}</p>
      </div>
      <div className="Date">
        <p>{props.startDate}</p>
        {props.startDate.length > 0 ? <p className="hyphen"> - </p> : null}
        <p className="endDate">{props.endDate}</p>
      </div>
      <div className="AboutRole">
        <p>{props.aboutRole}</p>
      </div>
    </div>
  );
}

export default Resume_2;
