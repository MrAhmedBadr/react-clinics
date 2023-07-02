import React from "react";
import book from "../img/book.png";
import "./book.css";
export default function Book() {
  return (
    <div className="book container">
      <div className="book_section">
        <div>Book Appointment</div>
        <form className="container">
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-3 col-form-label">
              Patient Name :
            </label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-3 col-form-label">
              National ID :
            </label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-3 col-form-label">
              Phone Number :
            </label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-3 col-form-label">
              Doctor name :
            </label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-3 col-form-label">
              Appointment :
            </label>
            <div class="col-sm-2">
              <input type="date" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-3 col-form-label">
              gender :
            </label>
            <div class="col-sm-4">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-3 col-form-label">
              Age :
            </label>
            <div class="col-sm-2">
              <input type="text" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
      <div className="img_book_section">
        <img className="img_book" src={book} />
      </div>
    </div>
  );
}
