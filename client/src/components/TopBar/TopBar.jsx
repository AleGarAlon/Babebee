import React from "react";
import "./TopBar.css";
import SocialMedia from "../SocialMedia/SocialMedia";

function TopBar() {
  return (
    <div className="topBarPage">
      <img
        className="topBarBBBLogo"
        src="https://res.cloudinary.com/dvml0gelc/image/upload/v1718744708/Babebee/Brand/Logo_completo_m%C3%ADnimo_v7eeol.jpg"
        alt="babebee-logo"
      />
      <div>
        <p></p>
      </div>
      <SocialMedia />
    </div>
  );
}

export default TopBar;
