import React from "react";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="" />
        <span>TaskMate</span>
      </div>
      <div className="themeSeclector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </div>
    </header>
  );
}
