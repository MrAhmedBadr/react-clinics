import React from "react";
import "./aboutus.css";
import aboutus from "../img/About us.png";
export default function AboutUs() {
  return (
    <div className="aboutUs">
      <center>
        <h1>ABOUT US</h1>
      </center>
      <div className="contain_AboutUs container">
        <div>
          <img className="img_aboutus" src={aboutus} />
        </div>
        <div className="aboutus_conta_para">
          <div className="title_pa">
            We Take Care Of Your <br />
            Healthy Life
          </div>
          <p className="para_aboutUs">
            It's very painful to get rid of obesity. We lead by
            <br /> right, that out of greed, in taking on any greater <br /> and
            guilt hates the times itself, who, whosoever,
            <br /> to make this flight, do not know less.
          </p>
          <p className="para_aboutUs">
            {" "}
            It's very painful, but it's easy to get rid of fat. Born
            <br /> in the truth, labors themselves, and pleasures for
            <br /> pleasures, from time to time, do they abandon
            <br /> them?
          </p>
        </div>
      </div>
    </div>
  );
}
