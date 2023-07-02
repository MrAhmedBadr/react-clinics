import React from "react";
import "./blood.css";
import blood from "../img/Blood Bank.png";
export default function Blood() {
  return (
    <div className="blood">
      <center>
        <h1>Blood Bank</h1>
      </center>
      <div className="container blood_conta">
        <form className="form_blood">
          <div>
            <label className="label" for="name">
              Patient name <span style={{ color: "RED" }}>*</span>:
            </label>
            <input type="text" name="name" className="sur_inp" required />
          </div>
          <div>
            <label className="label" for="name">
              National id <span style={{ color: "RED" }}>*</span>:
            </label>
            <input type="text" name="name" className="sur_inp" required />
          </div>
          <div>
            <label className="label" for="name">
              Anemia free <span style={{ color: "RED" }}>*</span>:
            </label>
            <input
              type="text"
              name="name"
              className="sur_inp d_blood"
              required
            />
          </div>
          <div>
            <label className="label" for="name">
              Type <span style={{ color: "RED" }}>*</span>:
            </label>
            <input type="text" name="name" className="sur_inp" required />
          </div>
          <div>
            <label className="label" for="name">
              Price <span style={{ color: "RED" }}>*</span>:
            </label>
            <input
              type="text"
              name="name"
              className="sur_inp d_blood"
              required
            />
          </div>
          <div>
            <label className="label" for="name">
              Quantity <span style={{ color: "RED" }}>*</span>:
            </label>
            <input
              type="text"
              name="name"
              className="sur_inp d_blood"
              required
            />
          </div>
          <div className="btn_con">
            <input className="nur_btn" type="submit" />
          </div>
        </form>
        <div className="im_b">
          <img className="blood_img" src={blood} />
        </div>
      </div>
    </div>
  );
}
