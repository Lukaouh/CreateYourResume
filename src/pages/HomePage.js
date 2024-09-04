import React from "react";
import "../styles/Home.css";
import HomeBackground from "../assets/homeBackground.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div
      className="homeContainer"
      style={{ backgroundImage: `url(${HomeBackground})` }}
    >
      <h1 className="homeText">Create Your Resume</h1>
      <div className="homeBtn">
        <Link to="/InfoPage">
          <button>რეზიუმეს შექმნა</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
