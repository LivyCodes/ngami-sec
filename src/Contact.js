import React from "react";
import "./Contact.css";

function Contacts() {
  return (
    <div>
      <div className="col-6 custom-form">
        <h3 className="mt-1">Contact Us</h3>
        <div className="mb-3 ">
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Subject"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <button type="button" class="btn btn-info button">
            Submit
          </button>
        </div>
      </div>
      <h3>Reach Us Via:</h3>
      <ul>
        <li>
          <p>
            <p>Email: ngamisecschool@gmail.com </p>
            <a href="mailto:ngamisecschool@gmail.com" title="send email">
              <li class="list-item">
                Click to email! <br />
                <i class="fa-regular fa-envelope "></i>
              </li>
            </a>
          </p>
        </li>
        <li>
          <p>
            <p>Phone: +25410281942 </p>
            <a href="tel:+25410281942" title="make a call">
              <li class="list-item">
                Click to make a call! <br />
                <i class="fa-solid fa-phone"></i>
              </li>
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
