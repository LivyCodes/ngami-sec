import React from "react";
import "./logo.css";
import SchoolLogo from "./ngamischoollogo.jpg";

function Logo() {
  return (
    <div className="hero">
      <img src={SchoolLogo} alt="logo" height={100} width={100} />
      <h1>NGAMI SECONDARY SCHOOL</h1>
    </div>
  );
}

export default Logo;
