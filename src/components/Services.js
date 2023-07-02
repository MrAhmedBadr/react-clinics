import React from "react";
import "./services.css";
import a from "../img/Services that present to patients/a.png";
import b from "../img/Services that present to patients/b.png";
import c from "../img/Services that present to patients/c.png";
import d from "../img/Services that present to patients/d.png";
export default function Services() {
  return (
    <div>
      <center>
        <h1>Our Services</h1>
      </center>
      <div className="serConta container">
        <div className="serIns">
          <div className="serItem">
            <div>
              <img className="servImg" src={d} />
            </div>
            <div>
              <div className="servTitle">
                {" "}
                using a hollow needle and a syringe{" "}
              </div>
              <p className="servTitle">Price : 60 L.E</p>
            </div>
            <div className="serBtn">
              <span className="serBtnItem">Order</span>
            </div>
          </div>
          <div className="serItem">
            <div>
              <img className="servImg" src={b} />
            </div>
            <div>
              <div className="servTitle"> Several departments </div>
            </div>
            <div className="serBtn">
              <span className="serBtnItem">View</span>
            </div>
          </div>
        </div>
        <div className="serIns">
          <div className="serItem">
            <div>
              <img className="servImg" src={c} />
            </div>
            <div>
              <div className="servTitle">
                {" "}
                Treating dehydration after illness
              </div>
              <p className="servTitle">Price : 80 L.E</p>
            </div>
            <div className="serBtn">
              <span className="serBtnItem">Order</span>
            </div>
          </div>
          <div className="serItem">
            <div>
              <img className="servImg" src={a} />
            </div>
            <div>
              <div className="servTitle">
                {" "}
                Wounds are among the most common injuries
              </div>
              <p className="servTitle">Price : 60 L.E</p>
            </div>
            <div className="serBtn">
              <span className="serBtnItem">Order</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
