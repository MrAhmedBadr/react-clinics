import React from "react";
import "./nursery.css";
import nur from "../img/Nursery.png";
export default function Nursery() {
  return (
    <div>
      <center>
        <h1>Nursery</h1>
      </center>
      <form className="container form_nurs">
        <div>
          <label for="name">
            child name <span style={{ color: "RED" }}>*</span>:
          </label>
          <input type="text" name="name" className="nur_inp" required />
        </div>
        <div>
          <label for="name1">
            Father name <span style={{ color: "RED" }}>*</span>:
          </label>
          <input type="text" name="name1" className="nur_inp" required />
        </div>
        <div>
          <label for="name2">
            Mother name <span style={{ color: "RED" }}>*</span>:
          </label>
          <input type="text" name="name2" className="nur_inp" required />
        </div>
        <div>
          <label for="date">
            Date of birth <span style={{ color: "RED" }}>*</span>:
          </label>
          <input type="date" name="date" className="nur_inp da" required />
        </div>
        <div className="im_section">
          <div className="day_section">
            <div className="da_ins">
              <label for="Days">
                Days <span style={{ color: "RED" }}>*</span>:
              </label>
              <label
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "RGBa(123,162,239,1)",
                }}
                for="Day"
              >
                From
              </label>
              <input
                type="number"
                name="Day"
                className="nur_inp Day"
                required
              />
              <label
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "RGBa(123,162,239,1)",
                }}
                for="Day"
              >
                to
              </label>
              <input
                type="number"
                name="Day"
                className="nur_inp Day"
                required
              />
            </div>
            <div className="da_ins">
              <label for="Days">
                Times <span style={{ color: "RED" }}>*</span>:
              </label>
              <label
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "RGBa(123,162,239,1)",
                }}
                for="Day"
              >
                From
              </label>
              <input
                type="number"
                name="Day"
                className="nur_inp Day"
                required
              />
              <label
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "RGBa(123,162,239,1)",
                }}
                for="Day"
              >
                to
              </label>
              <input
                type="number"
                name="Day"
                className="nur_inp Day"
                required
              />
            </div>
          </div>
          <div className="img_section">
            <img className="nur_img" src={nur} />
          </div>
        </div>

        <div>
          <label for="name">
            Medical note <span style={{ color: "RED" }}>*</span>:
          </label>
          <input type="text" name="name" className="nur_inp" required />
        </div>
        <div>
          <label for="name">
            state <span style={{ color: "RED" }}>*</span>:
          </label>
          <input type="text" name="name" className="nur_inp" required />
        </div>
        <div>
          <label for="name">
            Phone<span style={{ color: "RED" }}>*</span>:
          </label>
          <input
            type="tel"
            pattern="[1-9]{1}[0-9]{9}"
            name="name"
            placeholder="1024485774"
            className="nur_inp phone"
            required
          />
        </div>
        <div className="btn_con">
          <input className="nur_btn" type="submit" />
        </div>
      </form>
    </div>
  );
}
