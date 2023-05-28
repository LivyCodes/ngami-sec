import React from "react";
import "./Dorm.css";
import DormPhoto from "./Images/dormitories.jpg";
import GirlsDorm from "./Images/girlsdorm.jpg";

function Dorm() {
  return (
    <div>
      <h3>BOARDING FACILITIES</h3>
      <ul>
        <p className="board">
          One of the key resources that contribute to the school's success is
          its boarding facilities. The boarding facilities at Ngami Secondary
          School are designed to provide students with a comfortable and safe
          environment where they can live and study.
        </p>
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={DormPhoto}
                class="d-block w-100"
                alt="Comps photos"
                height={550}
                width={550}
              />
              <div class="carousel-caption d-none d-md-block">
                <h5 className="custom-heading">Boys' Dormitory</h5>
              </div>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={GirlsDorm}
                  class="d-block w-100"
                  alt="Comps photos"
                  height={550}
                  width={550}
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className="custom-heading">Girls' Dormitory</h5>
                </div>
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <li>
          The boarding facilities are equipped with modern amenities, including
          dormitories, bathrooms, and common areas. The dormitories are designed
          to accommodate multiple students, and each student is provided with a
          bed. The bathrooms are cleaned regularly to ensure that they are
          hygienic and safe for use.
        </li>
        <li>
          The common areas in the boarding facilities are designed to promote
          social interaction and collaboration among students. The common areas
          include recreation areas, and dining halls. The recreation areas
          include sports facilities, including netball courts, volleyball
          courts, and football fields.
        </li>
        <li>
          The boarding facilities also provide students with access to healthy
          and nutritious meals. The school's dining halls are equipped with
          modern facilities that can accommodate a large number of students. The
          school's kitchen is staffed by chefs who prepare meals that meet the
          nutritional needs of students. The school also has a menu that caters
          to students with dietary restrictions or allergies.
        </li>
        <li>
          One of the significant benefits of the boarding facilities is that
          they provide students with a safe and secure environment. The school
          has a team of security personnel who patrol the boarding facilities to
          ensure that students are safe. The school also has strict rules and
          regulations that govern student behavior to promote discipline and
          respect among students.
        </li>
      </ul>
    </div>
  );
}

export default Dorm;
