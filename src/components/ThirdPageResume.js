import React from "react";
import { useState, useEffect } from "react";
import Resume_3 from "./Resume_3";

function ThirdPageResume() {
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [date, setDate] = useState("");
  const [aboutUniversity, setAboutUniversity] = useState("");

  useEffect(() => {
    const storedUni = localStorage.getItem("inputUni");
    const storedDegree = localStorage.getItem("inputDegree");
    const storedDate = localStorage.getItem("inputDate");
    const storedAboutUni = localStorage.getItem("inputAboutUni");

    if (storedUni) {
      setUniversity(storedUni);
    }
    if (storedDegree) {
      setDegree(storedDegree);
    }
    if (storedDate) {
      setDate(storedDate);
    }
    if (storedAboutUni) {
      setAboutUniversity(storedAboutUni);
    }
  }, []);

  const handleDate = (e) => {
    setDate(e.target.value);
    localStorage.setItem("inputDate", e.target.value);
  };
  const handleUniversity = (e) => {
    setUniversity(e.target.value);
    localStorage.setItem("inputUni", e.target.value);
  };
  const handleDegree = (e) => {
    setDegree(e.target.value);
    localStorage.setItem("inputDegree", e.target.value);
  };
  const handleAboutUniversity = (e) => {
    setAboutUniversity(e.target.value);
    localStorage.setItem("inputAboutUni", e.target.value);
  };
  return (
    <div className="leftContainer">
      <div className="line"></div>
      <div>
        <Resume_3
          university={university}
          degree={degree}
          date={date}
          aboutUni={aboutUniversity}
        />
      </div>
    </div>
  );
}

export default ThirdPageResume;
