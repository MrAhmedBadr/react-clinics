import React from "react";
import { Link } from "react-router-dom";
import home from "../img/home.png";
import "./home.css";
import doc from "../img/Doct.png";
import doc1 from "../img/Doct2.png";
import doc2 from "../img/Doct3.png";
import clinc1 from "../img/clinc1.png";
import clinc2 from "../img/clinc2.png";
import clinc3 from "../img/clinc3.png";
import clinc4 from "../img/clinc4.png";
import clinc5 from "../img/clinc5.png";
import doctInfo from "../img/doctors info.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <div className="container">
      <div className="firstSection">
        <div>
          <img className="homeImg" src={home} alt="img" />
        </div>
        <div style={{ textAlign: "center", paddingTop: "50px" }}>
          <div style={{ fontWeight: "bold" }}>Stay healthy and safe !!</div>
          <div>With us you can keep</div>
          <div>healthy</div>
        </div>
        <div style={{ paddingTop: "50px" }}>
          <Link className="sign signIn" to="/ContactUs">
            <span style={{ fontWeight: "bold", marginRight: "5px" }}>
              Contactus
            </span>
            <i class="fa-solid fa-right-long"></i>
          </Link>
        </div>
      </div>
      <div className="secSection">
        <center>
          <h1 style={{ fontWeight: "bold" }}>
            Discover The Online Appointment!
          </h1>
          <div className="contain_Appoint">
            <div className="Appoint container">
              <div>
                <img src={doc} alt="img" />
              </div>
              <div className="title_Appoint">VIEW DOCTOR</div>
              <div className="parag_Appoint">
                Share your health concern here and we shall <br /> assign you a
                top dcotor across the North East
              </div>
            </div>
            <div className="Appoint container">
              <div>
                <img src={doc2} alt="img" />
              </div>
              <div className="title_Appoint">BOOK A VISIT</div>
              <div className="parag_Appoint">
                Book your time slot with doctor from your comfort
                <br />
                zone
              </div>
            </div>
            <div className="Appoint container">
              <div>
                <img src={doc1} alt="img" />
              </div>
              <div className="title_Appoint">FIND DOCTOR</div>
              <div className="parag_Appoint">
                With more than 1000+ docotrs and an mission to
                <br />
                provide best care Health Care Service
              </div>
            </div>
          </div>
        </center>
      </div>
      <div className="thirdSection">
        <center>
          <h1>Clinic and Specialties</h1>
        </center>
        <div className="contain_clinc">
          <div className="clinc">
            <img className="img_c" src={clinc1} alt="img" />
            <div className="clinc_title">Urology</div>
          </div>
          <div className="clinc">
            <img className="img_c" src={clinc2} alt="img" />
            <div className="clinc_title">Neurology</div>
          </div>
          <div className="clinc">
            <img className="img_c" src={clinc3} alt="img" />
            <div className="clinc_title">Orthopedic</div>
          </div>
          <div className="clinc">
            <img className="img_c" src={clinc4} alt="img" />
            <div className="clinc_title">Cardiologist</div>
          </div>
          <div className="clinc">
            <img className="img_c" src={clinc5} alt="img" />
            <div className="clinc_title">Dentist</div>
          </div>
        </div>
      </div>
      <div className="forthSection">
        <center>
          <h1> Our Doctor</h1>
          <div>
            Our team of medical experts is there for you, from finding the right
            docotrs and hispotals to booking appointments and giving any kind of
            medical help in between.
          </div>
        </center>
        <div className="swip">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            // pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="doctorInfo">
                <div>
                  <img className="img_doctorInfo" src={doctInfo} alt="img" />
                </div>
                <div className="tit">DR.Marwan Mohamed</div>
                <div>Ophthalmologist</div>
                <div className="fle">
                  <div>
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div>Assiut, Gomhorya Street!</div>
                </div>
                <div className="fle">
                  <div>
                    <i class="fa-solid fa-clock"></i>
                  </div>
                  <div>Saturday, Monday and wednesday at 11am to 6pm</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="doctorInfo">
                <div>
                  <img className="img_doctorInfo" src={doctInfo} alt="img" />
                </div>
                <div className="tit">DR.Marwan Mohamed</div>
                <div>Ophthalmologist</div>
                <div className="fle">
                  <div>
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div>Assiut, Gomhorya Street!</div>
                </div>
                <div className="fle">
                  <div>
                    <i class="fa-solid fa-clock"></i>
                  </div>
                  <div>Saturday, Monday and wednesday at 11am to 6pm</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="doctorInfo">
                <div>
                  <img className="img_doctorInfo" src={doctInfo} alt="img" />
                </div>
                <div className="tit">DR.Marwan Mohamed</div>
                <div>Ophthalmologist</div>
                <div className="fle">
                  <div>
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div>Assiut, Gomhorya Street!</div>
                </div>
                <div className="fle">
                  <div>
                    <i class="fa-solid fa-clock"></i>
                  </div>
                  <div>Saturday, Monday and wednesday at 11am to 6pm</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="doctorInfo">
                <div>
                  <img className="img_doctorInfo" src={doctInfo} alt="img" />
                </div>
                <div className="tit">DR.Marwan Mohamed</div>
                <div>Ophthalmologist</div>
                <div className="fle">
                  <div>
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div>Assiut, Gomhorya Street!</div>
                </div>
                <div className="fle">
                  <div>
                    <i class="fa-solid fa-clock"></i>
                  </div>
                  <div>Saturday, Monday and wednesday at 11am to 6pm</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
