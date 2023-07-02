import React from "react";
import "./login.css";
import login from "../img/login.png";
export default function Login() {
  return (
    <div className="log">
      <div className="conta">
        <div className="log_tit">
          <img className="login_img" src={login} />
          <span className="title_login">Login</span>
        </div>
        <form className="form_login">
          <input
            type="text"
            placeholder="Email"
            name="name"
            className="login_inp"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="name"
            className="login_inp"
            required
          />

          <input className="login_btn" type="submit" value="Login" />
        </form>
        <div className="login_forget">you forget password ?</div>
      </div>
    </div>
  );
}
