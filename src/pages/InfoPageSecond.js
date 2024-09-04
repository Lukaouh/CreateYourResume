import React, { useEffect, useState } from "react";
import Resume_2 from "../components/Resume_2";
import FirstPageResume from "../components/FirstPageResume";
import { Link } from "react-router-dom";
import back from "../assets/lesserthan.svg";
import "../styles/InfoPage.css";
import InfoPage from "./InfoPage";
function InfoPageSecond() {
  const [position, setPosition] = useState("");
  const [employer, setEmployer] = useState("");
  const [aboutRole, setAboutRole] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isValid, setIsValid] = useState("");
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
    <div className="Container">
      <div className="rightSide">
        <div className="rightSideChild">
          <div className="mainHeader">
            <a className="backImg">
              <Link to="/">
                <img src={back} />
              </Link>
            </a>
            <h1 className="Header">გამოცდილება</h1>
          </div>
          <div className="aboutMeForm">
            <form>
              <label className="span" htmlFor="position">
                თანამდებობა
              </label>
              <input
                type="text"
                id="position"
                required
                value={position}
                placeholder="დეველოპერი, მენეჯერი ..."
                onChange={handlePosition}
                style={
                  {
                    // borderColor: isEmailValid ? "#98e37e" : "red",
                  }
                }
              />
              <span>მინიმუმ 2 სიმბოლო</span>
              <label className="span" htmlFor="employer">
                დამსაქმებელი
              </label>
              <input
                type="text"
                id="employer"
                required
                value={employer}
                placeholder="დამსაქმებელი"
                onChange={handleEmployer}
                style={
                  {
                    // borderColor: isEmailValid ? "#98e37e" : "red",
                  }
                }
              />
              <span>მინიმუმ 2 სიმბოლო</span>
            </form>
          </div>
          <div className="inputContainer">
            <div className="inputForName">
              <span className="span" htmlFor="startDay">
                დაწყების თარიღი
              </span>
              <input
                type="date"
                id="startDay"
                // style={{ borderColor: isNameValid ? "#98e37e" : "red" }}
                onChange={handleStartDate}
                value={startDate}
                required
              ></input>
            </div>
            <div className="inputForSurname">
              <span className="span" htmlFor="lastDay">
                დამთავრების თარიღი
              </span>
              <input
                type="date"
                id="lastDay"
                onChange={handlEndDate}
                value={endDate}
                // style={{ borderColor: isSurnameValid ? "#98e37e" : "red" }}
                required
              ></input>
            </div>
          </div>
          <div className="aboutMeForm">
            <form>
              <label className="span" htmlFor="aboutRole">
                როლის აღწერა
              </label>
              <textarea
                id="aboutRole"
                name="Message"
                rows={4}
                value={aboutRole}
                onChange={handleRole}
              />
            </form>
          </div>
          <div className="button">
            <a className="backPageButton">
              <Link to="/InfoPage">
                <button>უკან</button>
              </Link>
            </a>
            <a className="nextPageButton">
              <Link to="/InfoPageThird">
                <button>შემდეგი</button>
              </Link>
            </a>
          </div>
        </div>
      </div>
      <div className="leftContainer">
        <div className="leftSide">
          <FirstPageResume />
        </div>
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
    </div>
  );
}

export default InfoPageSecond;
