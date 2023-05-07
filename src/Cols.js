import React from "react";
import { Link } from "react-router-dom";
import "./Cols.css";

function Cols() {
  return (
    <div>
      <div className="container justify-content-start">
        <div className="row ">
          <div className="col mb-2 mt-2 custom-col">
            <h5>OUR VISION, MISSION & MOTTO</h5>
            <h6>Our Vision:</h6>
            <p>
              To become a leading education provider that produces visionary,
              self- drive exemplary leaders.
            </p>
            <h6>Our Mission:</h6>
            <p>To provide education that moulds an all round person.</p>
            <h6>Our Motto:</h6>
            <p>“Juhudi Ni Fanaka”</p>
          </div>
          <div className="col mb-2 mt-2 custom-col">
            <h5>OUR CORE VALUES & OBJECTIVES</h5>

            <ul>
              <li>Respect for individual differences</li>
              <li>Integrity</li>
              <li>Hardwork</li>
              <li>Professionalism</li>
              <li>Responsibility</li>
              <li>Courtesy</li>
              <li>Efficiency</li>
            </ul>
            <Link
              to="/CoreValues"
              title="click to see the menu"
              className="readmore-link"
            >
              Read more...
            </Link>
          </div>
          <div className="col mb-2 mt-2 custom-col ">
            <h5>SCHOOL POLICIES & REGULATIONS</h5>
            <p>
              School rules are established to maintain peace and order among
              members of the school community. Obviously, not everyone will be
              satisfied with all the rules. Problems are solved through dialogue
              and compromise. If a student has a problem/complaint to make, he
              should first report to the immediate person responsible for the
              affected area of school life. ...
            </p>
            <Link
              to="/Policies"
              title="click to see the menu"
              className="readmore-link"
            >
              Read more...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cols;
