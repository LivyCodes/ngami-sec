import React from "react";
import Comp2 from "./Images/comp2.jpg";

function CompLab() {
  return (
    <div>
      <h3>COMPUTER LABORATORY</h3>
      <p>
        Ngami Secondary School prides itself on providing quality education to
        its students. One of the school's essential facilities is the computer
        laboratory, which is equipped with the latest technology to enhance
        students' learning experience.
      </p>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={Comp2}
              class="d-block w-100"
              alt="Comps photos"
              height={550}
              width={550}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">
                Ngami Secondary School Computer Lab
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
      <p>
        The computer laboratory at Ngami Secondary School is a modern facility
        that is designed to provide students with hands-on experiences that
        enable them to learn about various computer-related technologies. The
        lab is equipped with the latest hardware and software, including desktop
        computers, laptops, printers, and scanners, which students use to
        develop various computer-related skills.
        <br />
        The computer laboratory is used to teach various computer-related
        courses, including computer components, information technology, and
        computer applications. Students are taught how to use different computer
        programs, including Microsoft Office Suite, Adobe Photoshop, and other
        software applications that are commonly used in various industries.
        <br />
        The computer laboratory plays a crucial role in preparing students for
        future careers. The lab provides students with practical experience that
        they can use to enter various fields that require computer-related
        skills. Such fields include programming and many others.
        <br />
        The computer laboratory is a valuable resource that will continue to
        play a critical role in shaping the future of education at Ngami
        Secondary School.
      </p>
    </div>
  );
}

export default CompLab;
