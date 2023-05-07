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
            <i class="fa-solid fa-house fa-2xl fa-custom"></i>
          </li>
        </Link>
        <Link to="/Profile" title="Get to know us">
          <li className="list-item">
            Who We Are <br />
            <i class="fa-solid fa-school fa-2xl fa-custom"></i>
          </li>
        </Link>
        <Link href="/Policies" title="School rules and regulations ">
          <li className="list-item">
            School Policies <br />
            <i class="fa-solid fa-shield-halved fa-2xl fa-custom"></i>
          </li>
        </Link>
        <Link to="#Link" title="Our programme">
          <li className="list-item">
            Academics <br />
            <i class="fa-solid fa-graduation-cap fa-2xl fa-custom"></i>
          </li>
        </Link>
        <Link to="#Link" title="Activities">
          <li className="list-item">
            Activities <br />
            <i class="fa-solid fa-trophy fa-2xl fa-custom"></i>
          </li>
        </Link>
        <Link to="/Contact" title="Contact Us">
          <li className="list-item">
            Contact Us <br />
            <i class="fa-solid fa-address-book fa-2xl fa-custom"></i>
          </li>
        </Link>
      </ul>
    </div>
  );
}
export default Footer;
