import React, { useEffect, useState } from "react";
import "../styles/InfoPage.css";
import back from "../assets/lesserthan.svg";
import { Link } from "react-router-dom";
import Resume from "../components/Resume";
import phoneImage from "../assets/foun.svg";
import emailImage from "../assets/email.svg";
function InfoPage() {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputSurnameValue, setInputSurnameValue] = useState("");
  const [inputAboutMeValue, setInputAboutMeValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputNumberValue, setInputNumberValue] = useState("");
  const [image, setImage] = useState(null);
  const [isValid, setIsValid] = useState();
  const [isEmailValid, setIsEmailValid] = useState();
  const [isNameValid, setIsNameValid] = useState();
  const [isSurnameValid, setIsSurnameValid] = useState();
  useEffect(() => {
    const storedName = localStorage.getItem("inputName");
    const storedSurname = localStorage.getItem("inputSurname");
    const storedAboutMe = localStorage.getItem("inputAboutMe");
    const storedEmail = localStorage.getItem("inputEmail");
    const storedPhone = localStorage.getItem("inputPhone");
    const storedImage = localStorage.getItem("image");

    if (storedName) {
      setInputNameValue(storedName);
    }
    if (storedSurname) {
      setInputSurnameValue(storedSurname);
    }
    if (storedAboutMe) {
      setInputAboutMeValue(storedAboutMe);
    }
    if (storedEmail) {
      setInputEmailValue(storedEmail);
    }
    if (storedPhone) {
      setInputNumberValue(storedPhone);
    }
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const onImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      localStorage.setItem("image", url);
    } else {
      setImage(null);
    }
  };
  const georgianRegex = /^[\u10A0-\u10FF]{2,}$/; //დასაშვებია მინიმუმ 2 ქართული სიმბოლო!

  const handleNameInputChange = (e) => {
    localStorage.setItem("inputName", e.target.value);
    setIsNameValid(georgianRegex.test(e.target.value));
    setInputNameValue(e.target.value);
  };
  const handleSurnameInputChange = (e) => {
    localStorage.setItem("inputSurname", e.target.value);
    setIsSurnameValid(georgianRegex.test(e.target.value));
    setInputSurnameValue(e.target.value);
  };

  const handleAboutMe = (e) => {
    localStorage.setItem("inputAboutMe", e.target.value);
    setInputAboutMeValue(e.target.value);
  };

  const handleEmail = (e) => {
    localStorage.setItem("inputEmail", e.target.value);
    const value = e.target.value;
    setInputEmailValue(e.target.value);
    setIsEmailValid(value.endsWith("gmail.com"));
    if (!value.endsWith("gmail.com")) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  };
  const handleNumber = (e) => {
    localStorage.setItem("inputPhone", e.target.value);
    setInputNumberValue(e.target.value);
    const input = e.target.value;
    const cleanedInput = input.replace(/[^+\d\s]/g, ""); // Allow only numbers, spaces, and '+'
    setInputNumberValue(cleanedInput);
  };
  const handleBlur = () => {
    const regex = /^\+995 \d{3} \d{2} \d{2} \d{2}$/;
    if (!regex.test(inputNumberValue)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  return (
    <>
      <div className="Container">
        <div className="rightSide">
          <div className="rightSideChild">
            <div className="mainHeader">
              <a className="backImg">
                <Link to="/">
                  <img src={back} />
                </Link>
              </a>
              <h1 className="Header">პირადი ინფორმაცია</h1>
            </div>
            <div className="inputContainer">
              <div className="inputForName">
                <span className="span" htmlFor="name">
                  სახელი
                </span>
                <input
                  type="text"
                  id="name"
                  value={inputNameValue}
                  onChange={handleNameInputChange}
                  style={{ borderColor: isNameValid ? "#98e37e" : "red" }}
                  required
                ></input>
                <span className="validation">მინიმუმ 2 ქართული სიმბოლო</span>
              </div>
              <div className="inputForSurname">
                <span className="span" htmlFor="surname">
                  გვარი
                </span>
                <input
                  type="text"
                  id="surname"
                  value={inputSurnameValue}
                  onChange={handleSurnameInputChange}
                  style={{ borderColor: isSurnameValid ? "#98e37e" : "red" }}
                  required
                ></input>
                <span className="validation">მინიმუმ 2 ქართული სიმბოლო</span>
              </div>
            </div>
            <div className="PictureApload">
              <span className="span">პირადი ფოტოს ატვირთვა</span>
              <input
                id="main-image"
                accept="image/*"
                type="file"
                className="profileUploader"
                required
                onChange={onImageChange}
              ></input>
              <label htmlFor="main-image" className="labelForUpload">
                {" "}
                ატვირთვა{" "}
              </label>
            </div>
            <div className="aboutMeForm">
              <form>
                <label className="span" htmlFor="aboutMe">
                  ჩემს შესახებ (არასავალდებულო)
                </label>
                <textarea
                  id="aboutMe"
                  name="Message"
                  rows={7}
                  onChange={handleAboutMe}
                  value={inputAboutMeValue}
                />
                <label className="span" htmlFor="email">
                  ელ.ფოსტა
                </label>
                <input
                  type="text"
                  id="email"
                  required
                  onChange={handleEmail}
                  value={inputEmailValue}
                  style={{
                    borderColor: isEmailValid ? "#98e37e" : "red",
                  }}
                />
                <span>უნდა მთავრდებოდეს @gmail.com-თი</span>
                <label htmlFor="number" className="span">
                  მობილურის ნომერი
                </label>
                <input
                  type="text"
                  id="number"
                  placeholder="+995 000 00 00 00"
                  required
                  onChange={handleNumber}
                  onBlur={handleBlur}
                  value={inputNumberValue}
                  style={{
                    borderColor: isValid ? "#98e37e" : "red",
                  }}
                />
                <span>
                  უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს.
                </span>
                <a className="nextPageButton">
                  <Link to="/InfoPageSecond">
                    <button>შემდეგი</button>
                  </Link>
                </a>
              </form>
            </div>
          </div>
        </div>

        <div className="leftSide">
          <Resume
            name={inputNameValue}
            surname={inputSurnameValue}
            image={image}
            phoneImage={phoneImage}
            emailImage={emailImage}
            aboutMe={inputAboutMeValue}
            phone={inputNumberValue}
            email={inputEmailValue}
          />
        </div>
      </div>
    </>
  );
}

export default InfoPage;
