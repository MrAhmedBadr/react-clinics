import React from "react";
import "./auth.css";
import p from "../img/p.png";
import d from "../img/d.png";
export default function auth() {
  return (
    <div className="auth conatiner">
      <div className="auth_ins auth_right">
        <div>
          <img className="auth_img" src={d} />
        </div>
        <button className="auth_btn">Doctor</button>
      </div>
      <div className="auth_ins auth_left">
        <div>
          <img className="auth_img" src={p} />
        </div>
        <button className="auth_btn">Patient</button>
      </div>
    </div>
  );
}
