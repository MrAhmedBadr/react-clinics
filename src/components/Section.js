import React from "react";
import "./section.css";
import blood from "../img/Services that present to doctors for patients/Blood_Bank-removebg-preview.png";
import care from "../img/Services that present to doctors for patients/care room.png";
import nur from "../img/Services that present to doctors for patients/Nurseries.png";
import sur from "../img/Services that present to doctors for patients/Surgical Room.png";
export default function Section() {
  return (
    <div className="section container">
      <div className="sect_ins">
        <div className="sect_item container">
          <div>
            <img className="sec_img" src={blood} />
          </div>
          <div className="sec_title">Blood Bank</div>
          <div>
            it a storehouse for storing blood collected from blood donors
          </div>
          <div className="btn_sec">Book</div>
        </div>
        <div className="sect_item container">
          <div>
            <img className="sec_img" src={nur} />
          </div>
          <div className="sec_title">Nurseries</div>
          <div>
            it contains adequate nutrition and oxygen, and docotrs can montior
            childern and follow their condition well 24 hours
          </div>
          <div className="btn_sec">Book</div>
        </div>
      </div>
      <div className="sect_ins">
        <div className="sect_item container">
          <div>
            <img className="sec_img" src={care} />
          </div>
          <div className="sec_title">Care Room</div>
          <div>
            the service is characterized by the ingenuity of all patient to help
            them take treatment whether inside or outside the hospital , and the
            full care of patients
          </div>
          <div className="btn_sec">Book</div>
        </div>
        <div className="sect_item container">
          <div>
            <img className="sec_img" src={sur} />
          </div>
          <div className="sec_title">Surgical Room</div>
          <div>
            It is characterized by its large size and cleanliness, equipped with
            all the devices used in the anesthesia process
          </div>
          <div className="btn_sec">Book</div>
        </div>
      </div>
    </div>
  );
}
