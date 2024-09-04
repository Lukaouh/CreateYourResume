import React, { useEffect, useState } from "react";
import FirstPageResume from "../components/FirstPageResume";
import SecondPageResume from "../components/SecondPageResume";
import Resume_3 from "../components/Resume_3";
import back from "../assets/lesserthan.svg";
import { Link } from "react-router-dom";
import "../styles/InfoPage.css";
function InfoPageThird() {
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
    <div className="Container">
      <div className="rightSide">
        <div className="rightSideChild">
          <div className="mainHeader">
            <a className="backImg">
              <Link to="/">
                <img src={back} />
              </Link>
            </a>
            <h1 className="Header">განათლება</h1>
          </div>
          <div className="aboutMeForm">
            <form>
              <label className="span" htmlFor="university">
                სასწავლებელი
              </label>
              <input
                type="text"
                id="university"
                required
                placeholder="სასწავლებელის დასახელება"
                value={university}
                onChange={handleUniversity}
              />
              <span>მინიმუმ 2 სიმბოლო</span>
            </form>
          </div>
          <div className="inputContainer">
            <div className="inputForName">
              <span className="span" htmlFor="degree">
                ხარისხი
              </span>
              <input
                type="text"
                id="degree"
                onChange={handleDegree}
                value={degree}
                // style={{ borderColor: isNameValid ? "#98e37e" : "red" }}
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
                onChange={handleDate}
                value={date}
                // style={{ borderColor: isSurnameValid ? "#98e37e" : "red" }}
                required
              ></input>
            </div>
          </div>
          <div className="aboutMeForm">
            <form>
              <label className="span" htmlFor="aboutRole">
                აღწერა
              </label>
              <textarea
                id="aboutRole"
                name="Message"
                rows={4}
                onChange={handleAboutUniversity}
                value={aboutUniversity}
              />
            </form>
          </div>
          <div className="button">
            <a className="backPageButton">
              <Link to="/InfoPageSecond">
                <button>უკან</button>
              </Link>
            </a>
            <a className="nextPageButton">
              <Link to="/FinalPage">
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
        <div>
          <SecondPageResume />
        </div>
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
    </div>
  );
}

export default InfoPageThird;
