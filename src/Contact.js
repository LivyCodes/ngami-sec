import React from "react";
import "./Contact.css";

function Contacts() {
  return (
    <div>
      <div className="row">
        <div className="col custom-form">
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
        <div className="col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.566219103813!2d38.30506677424997!3d-3.455085541841357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1838e002e69a1c1b%3A0xac3e1c706c589c36!2sNgami%20Secondary%20School!5e0!3m2!1sen!2ske!4v1684479303667!5m2!1sen!2ske"
            title="map"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
