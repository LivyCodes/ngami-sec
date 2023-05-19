import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link me-2" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ABOUT US
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/Profile">
                    OUR PROFILE
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/Histori">
                    OUR HISTORY
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/Vm">
                    VISION & MISSION
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/CoreValues">
                    CORE VALUES & OBJECTIVES
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/Policies">
                    SCHOOL POLICIES & REGULATIONS
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ADMISSION
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/AdmissionOverview">
                    ADMISSION OVERVIEW
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/AdmissionCriteria">
                    SCHOOL ACADEMIC POLICY
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/SchoolPrize">
                    SCHOOL PRIZE & AWARDS
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/TermDates">
                    TERM DATES
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/FeePayment">
                    FEE PAYMENT
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                FACILITIES
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="Lib">
                    LIBRARY
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/SciLab">
                    SCIENCE LABORATORIES
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/CompLab">
                    COMPUTER LABORATORY
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/Dorm">
                    BOARDING
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/Infrastructure">
                    YEARLY INFRASTRUCTURE IMPROVEMENT
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link me-2" aria-current="page" to="/Contact">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
