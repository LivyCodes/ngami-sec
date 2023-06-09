import React from "react";
import Cols from "./Cols";
import "./Carousel.css";
import Schoolphoto from "./Images/frontphoto.jpg";
import Seavuria from "./Images/seavuria.jpg";
import MCAcheque from "./Images/mcacheque.jpg";
import Muslims from "./Images/muslims.jpg";
import HODs from "./Images/hods1.jpg";
import HillView from "./Images/hillview.jpg";

function Carousel() {
  return (
    <div>
      <h3 className="welcome">Welcome to Ngami Secondary School</h3>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={Schoolphoto}
              class="d-block w-100"
              alt="school photos"
              height={600}
              width={550}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">
                WELCOME TO NGAMI SECONDARY SCHOOL
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={HODs}
              class="d-block w-100"
              alt="Muslim student photos"
              height={600}
              width={550}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">
                School's Heads of Departments (HODs)
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={Seavuria}
              class="d-block w-100"
              alt="M.F photos"
              height={600}
              width={550}
            />

            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">
                Seavuria scholars for the year 2023
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={MCAcheque}
              class="d-block w-100"
              alt="Boys football photos"
              height={600}
              width={550}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">
                The MCA presenting a cheque to the school
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={Muslims}
              class="d-block w-100"
              alt="Muslim student photos"
              height={600}
              width={550}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">
                Students of the School's Muslim Society
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={HillView}
              class="d-block w-100"
              alt="Muslim student photos"
              height={600}
              width={550}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">
                View of a hill from within the school environment
              </h5>
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
      <h3 className="mt-3 head-custom">Ngami Secondary School</h3>
      <p>
        Ngami Secondary School is a day/boarding, girls/boys' school that is
        currently offering the 8-4-4 curriculum which has been the Kenyan system
        of education since 1985. This school has produced men and women of great
        academic experience and has nurtured talents too. To date, the school
        has served over 3200 students since its inception who have served in
        both academics and co-curricular activities. The different co-curricular
        activities offered range from basketball boys, volleyball boys and
        girls, netball girls, football boys, drama and many others. In the year
        2016 and 2017, the school volleyball boys team progressed to the
        regional level bringing back home a wonderful trophy, while the drama
        troupe as well reached the regional level. The music group represented
        the school at the National level. The school enrolment has grown over
        time.
      </p>
      <Cols />
    </div>
  );
}

export default Carousel;
