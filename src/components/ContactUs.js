import React from "react";
import "./contactUs.css";
export default function ContactUs() {
  return (
    <div className="cont container">
      <div className="contai">
        <div className="title_cont">Contact Us</div>
        <form className="form_cont">
          <div>
            <label for="name">
              Name : <span style={{ color: "RED" }}>*</span>:
            </label>
            <input type="text" name="name" className="cont_inp" required />
          </div>
          <div>
            <label for="name">
              Email:<span style={{ color: "RED" }}>*</span>:
            </label>
            <input type="text" name="name" className="cont_inp" required />
          </div>
          <div>
            <label for="name">
              Phone Number : <span style={{ color: "RED" }}>*</span>:
            </label>
            <input type="text" name="name" className="cont_inp" required />
          </div>
          <div>
            <label for="name">
              Comment : <span style={{ color: "RED" }}>*</span>:
            </label>
            <textarea
              className="cont_inp texta"
              name="textarea"
              rows="10"
              cols="100"
            ></textarea>
          </div>
          <div className="btn_con">
            <input className="nur_btn" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
