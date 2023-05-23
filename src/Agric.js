import React from "react";
import Rabbitcare from "./Images/rabbits.jpg";
import Rabbitfarm from "./Images/rabbits4.jpg";
import Orchard from "./Images/orchard1.jpg";
import Agricproject from "./Images/agriproject.jpg";

function Agric() {
  return (
    <div>
      <h3>Agricultural Projects</h3>
      <p>
        Ngami Secondary School is dedicated to providing a well-rounded
        education that goes beyond traditional classroom learning. As part of
        the curriculum, students who choose agriculture as their subject of
        choice have the opportunity to engage in various agricultural projects
        as part of the curriculum fulfillment. These projects not only enhance
        their knowledge and understanding of agriculture but also instill
        practical skills that can be applied in real-world scenarios.
      </p>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={Agricproject}
              class="d-block w-100"
              alt="school photos"
              height={600}
              width={550}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">
                Students on a field trip at the farm
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={Rabbitfarm}
              class="d-block w-100"
              alt="M.F photos"
              height={600}
              width={550}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">Rabbit farm</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={Rabbitcare}
              class="d-block w-100"
              alt="Boys football photos"
              height={600}
              width={550}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">
                Students tending to the rabbits
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={Orchard}
              class="d-block w-100"
              alt="Muslim student photos"
              height={700}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">School Orchard</h5>
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
        Ngami Secondary School believes in hands-on learning, and the
        agricultural projects are a testament to that philosophy. Students who
        opt for agriculture as a subject actively participate in these projects,
        which are designed to provide them with practical experience in various
        aspects of farming and agricultural management. <br />
        <br />
        One of the key agricultural projects carried out by students at Ngami
        Secondary School is crop cultivation. Under the guidance of experienced
        instructors, students learn the fundamentals of plant growth, soil
        preparation, and crop management. They actively engage in activities
        such as seed selection, sowing, watering, and pest control. These
        hands-on experiences allow students to understand the intricacies of
        crop production and gain insights into sustainable agricultural
        practices. <br />
        <br />
        Livestock rearing is another crucial component of the agricultural
        projects at Ngami Secondary School. Students learn about different
        livestock species, their nutritional requirements, and breeding
        techniques. They actively participate in tasks such as animal feeding,
        hygiene maintenance, and veterinary care. Through these activities,
        students develop practical skills in livestock management and gain an
        understanding of the economic and environmental aspects of animal
        farming.
        <br />
        <br />
        Ngami Secondary School also encourages students to engage in
        agribusiness projects. Students are exposed to the entrepreneurial
        aspects of agriculture, such as market analysis, cost management, and
        product promotion. They have the opportunity to develop and execute
        their own agribusiness plans, which helps them understand the commercial
        aspects of agriculture and nurtures their entrepreneurial spirit.
        <br />
        <br />
        The agricultural projects at Ngami Secondary School have numerous
        benefits for students. Firstly, they provide practical experience and
        skills in various aspects of agriculture, preparing students for
        potential careers in the field. Secondly, the projects foster a sense of
        environmental awareness and sustainable practices among students,
        encouraging them to be responsible stewards of the land. Lastly, these
        projects instill important life skills such as teamwork,
        problem-solving, and critical thinking, which are applicable in various
        aspects of life beyond agriculture.
        <br />
        <br />
        In conclusion, Ngami Secondary School is committed to providing a
        comprehensive education that extends beyond textbooks and classrooms.
        The agricultural projects offered to students who choose agriculture as
        their subject of choice exemplify this commitment. These projects
        provide hands-on experiences, practical skills, and real-world
        applications, allowing students to develop a deep understanding of
        agriculture and its significance in sustainable development. Through
        these projects, Ngami Secondary School prepares students for a future
        where they can contribute to the growth and prosperity of the
        agricultural sector in Kenya and beyond.
      </p>
    </div>
  );
}

export default Agric;
