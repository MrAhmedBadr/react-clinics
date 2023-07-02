import React from "react";
import med from "../img/Medical research-amico.png";
import "./about.css";
export default function About() {
  return (
    <div className="about container">
      <div className="about_first">
        <div style={{ fontWeight: "bold" }}>
          We present a lot of services that help docotrs to perform their
          missions in the best way !
        </div>
        <div>If your are interested as a doctor</div>
        <div className="btn_about"> Click here</div>
      </div>
      <div>
        <img className="about_img" src={med} />
      </div>
    </div>
  );
}
