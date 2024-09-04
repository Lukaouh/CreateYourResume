import React from "react";
import "../styles/FinalPage.css";
import FirstPageResume from "../components/FirstPageResume";
import InfoPageSecond from "../components/SecondPageResume";
import ThirdPageResume from "../components/ThirdPageResume";

function FinalPage() {
  return (
    <div className="finalPageContainer">
      <div className="Items">
        <div className="firstItem">
          <FirstPageResume />
        </div>
        <div className="secondItem">
          <InfoPageSecond />
        </div>
        <div className="thirdItem">
          <ThirdPageResume />
        </div>
      </div>
    </div>
  );
}

export default FinalPage;
