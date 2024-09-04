import React, { useEffect, useState } from "react";
import Resume_2 from "../components/Resume_2";

function InfoPageSecond() {
  const [position, setPosition] = useState(false);
  const [employer, setEmployer] = useState(false);
  const [aboutRole, setAboutRole] = useState(false);
  const [startDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    const storedPosition = localStorage.getItem("inputPosition");
    const storedEmployer = localStorage.getItem("inputEmployer");
    const storedRole = localStorage.getItem("inputRole");
    const storedStartDate = localStorage.getItem("inputStartDate");
    const storedEndDate = localStorage.getItem("inputEndDate");
    if (storedPosition) {
      setPosition(storedPosition);
    }
    if (storedEmployer) {
      setEmployer(storedEmployer);
    }
    if (storedRole) {
      setAboutRole(storedRole);
    }
    if (storedStartDate) {
      setStartDate(storedStartDate);
    }
    if (storedEndDate) {
      setEndDate(storedEndDate);
    }
  }, []);
  const handlePosition = (e) => {
    localStorage.setItem("inputPosition", e.target.value);
    setPosition(e.target.value);
  };
  const handleEmployer = (e) => {
    localStorage.setItem("inputEmployer", e.target.value);
    setEmployer(e.target.value);
  };
  const handleRole = (e) => {
    localStorage.setItem("inputRole", e.target.value);
    setAboutRole(e.target.value);
  };
  const handleStartDate = (e) => {
    localStorage.setItem("inputStartDate", e.target.value);
    setStartDate(e.target.value);
  };
  const handlEndDate = (e) => {
    localStorage.setItem("inputEndDate", e.target.value);
    setEndDate(e.target.value);
  };
  return (
    <div className="leftContainer">
      <div className="line"></div>
      <div className="Role">
        <Resume_2
          position={position}
          employer={employer}
          aboutRole={aboutRole}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    </div>
  );
}

export default InfoPageSecond;
