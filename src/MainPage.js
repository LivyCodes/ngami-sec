import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Carousel from "./Carousel";
import Logo from "./logo";
import Footer from "./Footer";
import Profile from "./Profile";
import Histori from "./Histori";
import VisionMission from "./Vm";
import CoreValues from "./CoreValues";
import Policies from "./Policies";
import AdmissionCriteria from "./AdmissionCriteria";
import AdmissionOverview from "./AdmissionOverview";
import SchoolPrize from "./SchoolPrize";
import TermDates from "./TermDates";
import FeePayment from "./FeePayment";
import Lib from "./Lib";
import SciLab from "./SciLab";
import CompLab from "./CompLab";
import Dorm from "./Dorm";
import Contacts from "./Contact";
import Copyright from "./Copyright";
import "./Mainpage.css";

function MainPage() {
  return (
    <Router>
      <div className="container ">
        <div className="wrapper">
          <div className="Navigation">
            <Logo />

            <NavBar />
            <Routes>
              <Route exact path="/" element={<Carousel />} />
              <Route exact path="/Profile" element={<Profile />} />
              <Route exact path="/Histori" element={<Histori />} />
              <Route exact path="/Vm" element={<VisionMission />} />
              <Route exact path="/CoreValues" element={<CoreValues />} />
              <Route exact path="/Policies" element={<Policies />} />
              <Route
                exact
                path="/AdmissionCriteria"
                element={<AdmissionCriteria />}
              />
              <Route
                exact
                path="/AdmissionOverview"
                element={<AdmissionOverview />}
              />
              <Route exact path="/SchoolPrize" element={<SchoolPrize />} />
              <Route exact path="/TermDates" element={<TermDates />} />
              <Route exact path="/FeePayment" element={<FeePayment />} />
              <Route exact path="/Lib" element={<Lib />} />
              <Route exact path="/SciLab" element={<SciLab />} />
              <Route exact path="/CompLab" element={<CompLab />} />
              <Route exact path="/Dorm" element={<Dorm />} />
              <Route exact path="/Contact" element={<Contacts />} />
            </Routes>
          </div>
          <div className="Main">
            <Footer />
            <Copyright />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default MainPage;
