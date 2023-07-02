import React from "react";
import "./surgical.css";
import su from "../img/Surgical Operations booking.jpg";
export default function Surgical() {
  return (
    <div className="sur">
      <center>
        <h1>Surgical Operations booking</h1>
      </center>
      <div className="sur_cont container">
        <form className="form_sur">
          <div>
            <label for="name">
              Patient name <span style={{ color: "RED" }}>*</span>:
            </label>
            <input type="text" name="name" className="sur_inp" required />
          </div>
          <div>
            <label for="name">
              Doctor name <span style={{ color: "RED" }}>*</span>:
            </label>
            <input type="text" name="name" className="sur_inp" required />
          </div>
          <div>
            <label for="name">
              Surgical description <span style={{ color: "RED" }}>*</span>:
            </label>
            <input type="text" name="name" className="sur_inp" required />
          </div>
          <div>
            <label for="name">
              Type <span style={{ color: "RED" }}>*</span>:
            </label>
            <input type="text" name="name" className="sur_inp" required />
          </div>

          <div>
            <label for="name">
              Price <span style={{ color: "RED" }}>*</span>:
            </label>
            <input type="text" name="name" className="sur_inp s_w" required />
          </div>
          <div>
            <label for="name">
              Time <span style={{ color: "RED" }}>*</span>:
            </label>
            <input type="time" name="name" className="sur_inp s_w" required />
          </div>
          <div>
            <label for="name">
              Days <span style={{ color: "RED" }}>*</span>:
            </label>
            <input type="date" name="name" className="sur_inp s_w" required />
          </div>
          <div>
            <label for="name">
              Clinic <span style={{ color: "RED" }}>*</span>:
            </label>
            <input type="number" name="name" className="sur_inp s_w" required />
          </div>
          <div className="btn_con">
            <input className="nur_btn" type="submit" />
          </div>
        </form>
        <div>
          <img className="su_img" src={su} />
        </div>
      </div>
    </div>
  );
}
