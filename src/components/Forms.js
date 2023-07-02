import React from "react";
import "./forms.css";
export default function Forms(props) {
  return (
    <div className="sol container">
      <center>
        <h1>{props.title}</h1>
      </center>
      <div className="contain">
        <form className="form">
          <div>
            <div>
              <label for="name">
                Patient name <span style={{ color: "red" }}>*</span> :
              </label>
              <input
                className="inp"
                type="text"
                id="name"
                placeholder="Enter Patient Name"
                name="name"
                required
              />
            </div>
            <div>
              <label for="Service">
                Service name <span style={{ color: "red" }}>*</span> :
              </label>
              <input
                className="inp"
                type="text"
                id="Service"
                placeholder="Enter Service Name"
                name="Service"
                required
              />
            </div>
          </div>

          <div>
            <input className="sub" type="submit" />
          </div>
        </form>
        <div>
          <img width="300" height="300" src={props.img} alt="img" />
        </div>
      </div>
    </div>
  );
}
