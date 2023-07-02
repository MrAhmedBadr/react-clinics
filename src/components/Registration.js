import React from "react";
import "./registration.css";
export default function Registration() {
  return (
    <div className="reg container">
      <div className="re_tit">Registration</div>
      <div className="fo_tit">Personal Details</div>
      <form style={{ paddingTop: "30px" }} class="row g-5">
        <div class="col-md-4">
          <label for="inputname4" class="form-label">
            First Name
          </label>
          <input
            placeholder="Enter your name"
            type="text"
            class="form-control"
            id="inputname4"
          />
        </div>
        <div class="col-md-4">
          <label for="inputname5" class="form-label">
            Middel Name
          </label>
          <input
            placeholder="Enter your name"
            type="text"
            class="form-control"
            id="inputname5"
          />
        </div>
        <div class="col-md-4">
          <label for="inputname6" class="form-label">
            Last Name
          </label>
          <input
            placeholder="Enter your name"
            type="text"
            class="form-control"
            id="inputname6"
          />
        </div>

        <div class="col-md-4">
          <label for="inputState" class="form-label">
            Clinic
          </label>
          <select id="inputState" class="form-select">
            <option selected>select clinic</option>
            <option>clinic1</option>
            <option>clinic2</option>
            <option>clinic3</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputmobi" class="form-label">
            Mobile Number
          </label>
          <input
            placeholder="Enter mobile number"
            type="text"
            class="form-control"
            id="inputmobi"
          />
        </div>
        <div class="col-md-4">
          <label for="inputbir" class="form-label">
            Date Of Birth
          </label>
          <input
            placeholder="Enter your name"
            type="date"
            class="form-control"
            id="inputbir"
          />
        </div>
        <div class="col-md-4">
          <label for="inputemial" class="form-label">
            Email
          </label>
          <input
            placeholder="Enter your Email"
            type="Email"
            class="form-control"
            id="inputemial"
          />
        </div>
        <div class="col-md-4">
          <label for="inputPass" class="form-label">
            Password
          </label>
          <input
            placeholder="Password"
            type="password"
            class="form-control"
            id="inputPass"
          />
        </div>
        <div class="col-md-4">
          <label for="inputConfpass" class="form-label">
            Confirm Password
          </label>
          <input
            placeholder="Confirm Password"
            type="password"
            class="form-control"
            id="inputConfpass"
          />
        </div>
        <div className="btn_cont">
          <button type="submit" className="btn_res">
            Done
          </button>
        </div>
      </form>
    </div>
  );
}
