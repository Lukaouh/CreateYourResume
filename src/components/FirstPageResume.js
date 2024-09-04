import React from "react";
import { useState, useEffect } from "react";
import Resume from "./Resume";
import phoneImage from "../assets/foun.svg";
import emailImage from "../assets/email.svg";
function FirstPageResume() {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputSurnameValue, setInputSurnameValue] = useState("");
  const [inputAboutMeValue, setInputAboutMeValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputNumberValue, setInputNumberValue] = useState("");
  const [image, setImage] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isSurnameValid, setIsSurnameValid] = useState(true);
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
  );
}
export default FirstPageResume;
