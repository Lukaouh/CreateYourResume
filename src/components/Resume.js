import React from "react";
import "../styles/Resume.css";

function Resume(props) {
  const ProfileImage = props.image;
  const EmailImg = props.emailImage;
  const PhoneImg = props.phoneImage;

  return (
    <div className="mainResume">
      <div className="aboutResume">
        <div className="resumeImageHidden">
          {ProfileImage ? <img src={ProfileImage} alt="image" /> : null}
        </div>
        <div className="resumeText">
          <div className="fullName">
            <h1 className="name">{props.name}</h1>
            <h1 className="name">{props.surname}</h1>
          </div>
          <div className="Social">
            <div className="email">
              {props.email.length > 0 ? <img src={EmailImg} /> : null}
              <span>{props.email}</span>
            </div>
            <div className="phone">
              {props.phone.length > 0 ? <img src={PhoneImg} /> : null}
              <span>{props.phone}</span>
            </div>
          </div>
          <div className="aboutMe">
            {props.aboutMe.length > 0 ? (
              <h1 className="biographyTitle">ჩემს შესახებ</h1>
            ) : null}
            <p className="biography">{props.aboutMe}</p>
          </div>
        </div>
        <div className="resumeImage">
          {ProfileImage ? <img src={ProfileImage} alt="image" /> : undefined}
        </div>
      </div>
    </div>
  );
}

export default Resume;
