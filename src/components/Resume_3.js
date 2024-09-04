import React from "react";
import "../styles/Resume_3.css";
import "../styles/Resume_2.css";
function Resume_3(props) {
  return (
    <div className="Pagecontainer">
      <div className="pageItems">
        <div className="education">
          {props.university.length > 0 ? <h2>განათლება</h2> : null}
        </div>
        <div className="university">
          <div className="uni">
            <p className="uniName">{props.university}</p>
          </div>
        </div>
        <div className="degree">
          <div className="uniDegree">
            <p>{props.degree}</p>
          </div>
        </div>
        <div className="date">
          {props.date.length > 0 ? (
            <p className="lastDate">დამთავრების თარიღი : </p>
          ) : null}
          <p className="lastDateValue">{props.date}</p>
        </div>
        <div className="aboutUni">
          <p>{props.aboutUni}</p>
        </div>
      </div>
    </div>
  );
}

export default Resume_3;
