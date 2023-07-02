import React from "react";
import "./careRoom.css";
import careRo from "../img/Care Room.png";
export default function careRoom() {
  return (
    <div>
      <center>
        <h1>Care Room</h1>
      </center>
      <div className="care container">
        <div>
          <form className="care_form">
            <div>
              <label for="name">
                Patient name <span style={{ color: "RED" }}>*</span> :
              </label>
              <input
                type="text"
                name="name"
                placeholder="EnterName"
                className="care_inp"
                required
              />
            </div>
            <div>
              <label for="name">
                Doctor name <span style={{ color: "RED" }}>*</span> :
              </label>
              <input
                type="text"
                name="name"
                placeholder="EnterName"
                className="care_inp"
                required
              />
            </div>
            <div>
              <label for="name">
                Patient state <span style={{ color: "RED" }}>*</span> :
              </label>
              <input
                type="text"
                name="name"
                placeholder="EnterState"
                className="care_inp"
                required
              />
            </div>
            <div>
              <label>
                Type <span style={{ color: "RED" }}>*</span> :
              </label>
              <label className="ty" for="type1">
                Normal
              </label>
              <input type="radio" name="type" value="Normal" required />
              <label className="ty" for="type2">
                Intensive
              </label>
              <input type="radio" name="type" value="Intensive" required />
            </div>
            <div>
              <label for="number">
                Num of days<span style={{ color: "RED" }}>*</span> :
              </label>
              <input
                type="number"
                name="number"
                style={{ width: "100px" }}
                className="care_inp"
                required
              />
            </div>
            <input className="care_sub" type="submit" />
          </form>
        </div>
        <div>
          <img className="care_img" src={careRo} />
        </div>
      </div>
    </div>
  );
}
