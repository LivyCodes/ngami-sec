import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="heros">
      <h5 className="footer-title">Fast Access Links</h5>
      <ul>
        <Link to="/" title="Home">
          <li className="list-item">
            Home <br />
            <i class="fa-solid fa-house fa-beat fa-custom"></i>
          </li>
        </Link>
        <Link to="/Profile" title="Get to know us">
          <li className="list-item">
            Who We Are <br />
            <i class="fa-solid fa-school fa-beat fa-custom"></i>
          </li>
        </Link>
        <Link to="/Policies" title="School rules and regulations ">
          <li className="list-item">
            School Policies <br />
            <i class="fa-solid fa-shield-halved fa-beat fa-custom"></i>
          </li>
        </Link>
        <Link to="/AdmissionCriteria" title="Our programme">
          <li className="list-item">
            Academics <br />
            <i class="fa-solid fa-graduation-cap fa-beat fa-custom"></i>
          </li>
        </Link>
        <Link to="/SchoolPrize" title="Activities">
          <li className="list-item">
            Activities <br />
            <i class="fa-solid fa-award fa-beat fa-custom"></i>
          </li>
        </Link>
        <Link to="/FeePayment" title="Fee Payment">
          <li className="list-item">
            Fee Payment <br />
            <i class="fa-solid fa-credit-card fa-beat fa-custom"></i>
          </li>
        </Link>
        <Link to="/Contact" title="Contact Us">
          <li className="list-item">
            Contact Us <br />
            <i class="fa-solid fa-address-book fa-beat fa-custom"></i>
          </li>
        </Link>
      </ul>
    </div>
  );
}
export default Footer;
