import React from "react";
import a from "../img/Services that present to patients/a.png";
import b from "../img/Services that present to patients/b.png";
import c from "../img/Services that present to patients/c.png";
import d from "../img/Services that present to patients/d.png";
import "./services2.css";
export default function Services2() {
  return (
    <div className="services2">
      <center>
        <h1>Our Services</h1>
      </center>
      <div className="serv2 container">
        <img className="serv2_img" src={d} />
        <div>
          <p className="serv2_p">
            It is a means of introducing liquids into the body by using a hollow
            needle and a syringe to pierce the skin at an appropriate length so
            that the substance reaches the body.
            <p>Price : 60 L.E</p>
          </p>
        </div>
        <div className="serv2_btn_contain">
          <button className="serv2_btn ">Order</button>
        </div>
      </div>
      <div className="serv2 container ">
        <div className="serv2_btn_contain">
          <div className="serv2_btn color">Order</div>
        </div>
        <div>
          <p className="serv2_p ">
            Wounds are among the most common injuries that people can suffer.
            Open wounds can be dealt with with proper first aid; First aid
            contributes to reducing the occurrence of complications, such as:
            the occurrence of infection, and also helps in healing the wound
            quickly and correctly.
            <p>Price : 50 L.E</p>
          </p>
        </div>
        <img className="serv2_img" src={a} />
      </div>
      <div className="serv2 container">
        <img className="serv2_img" src={b} />
        <div>
          <p className="serv2_p">
            There are several departments are found in hospitals namely
            Outpatient department (OPD), Inpatient Service (IP), Medical
            Department, Nursing Department, Paramedical Department, Operation
            Theatre Complex (OT), Pharmacy Department, Radiology Department
            (X-ray), Dietary Department, Medical Record Department (MRD)
          </p>
        </div>
        <div className="serv2_btn_contain">
          <button className="serv2_btn ">View</button>
        </div>
      </div>
      <div className="serv2 container ">
        <div className="serv2_btn_contain">
          <div className="serv2_btn">Order</div>
        </div>
        <div>
          <p className="serv2_p ">
            There are many reasons and medical conditions that require fluids to
            be given intravenously to the patient, and the reasons for
            installing solutions include: Treating dehydration after illness or
            excessive activity. Treating cancer with chemo drugs. Reducing pain
            when using some medications. Treatment with some antibiotics.
            <p>Price : 80 L.E</p>
          </p>
        </div>
        <img className="serv2_img" src={c} />
      </div>
    </div>
  );
}
