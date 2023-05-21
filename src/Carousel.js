import React from "react";
import Cols from "./Cols";
import "./Carousel.css";
import Schoolphoto from "./Images/frontphoto.jpg";
import CoCurricular from "./Images/cocurricular.jpg";
import Muslims from "./Images/muslims.jpg";
import Games from "./Images/games222.jpg";

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
              src={CoCurricular}
              class="d-block w-100"
              alt="M.F photos"
              height={600}
              width={550}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">Music Festivals Club</h5>
              <p className="custom-p">Students from the Music Festivals Club</p>
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
              <h5 className="custom-heading">Muslim Society</h5>
              <p className="custom-p">
                Students of the School's Muslim Society
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={Games}
              class="d-block w-100"
              alt="Boys football photos"
              height={600}
              width={550}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">Boys Football Team</h5>
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
      <h3>Ngami Secondary School</h3>
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
