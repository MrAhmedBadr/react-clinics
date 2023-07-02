import React from "react";
import "./clinics.css";
import orth from "../img/Clinics/orthopedist.png";
import obs from "../img/Clinics/Obstetrics and gynecology.png";
import ped from "../img/Clinics/pediatrician.png";
import sur from "../img/Clinics/Surgry Doctor.png";
export default function Clinics() {
  return (
    <div className="Clinics container">
      <center>
        <h1>Clinics</h1>
      </center>
      <div className="clinic">
        <img className="clinic_img img_l" src={orth} />
        orthopedist
      </div>
      <div className="clinic">
        <img className="clinic_img img_r" src={ped} />
        pediatrician
      </div>
      <div className="clinic">
        <img className="clinic_img img_l" src={obs} />
        Obstetrics and gynecology
      </div>
      <div className="clinic">
        <img className="clinic_img img_r" src={sur} />
        Surgry Doctor
      </div>
    </div>
  );
}
