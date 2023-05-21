import React from "react";
import LabPrac from "./Images/labpracticals.jpg";
import SciLabs from "./Images/sciencelabs.jpg";

function SciLab() {
  return (
    <div>
      <h3>SCIENCE LABORATORIES</h3>
      <p>
        Ngami Secondary School is a leading institution in Kenya that prides
        itself on offering a well-rounded education. One of the hallmarks of the
        school is its exceptional science laboratories. The chemistry lab,
        physics lab, and biology lab are fully equipped to provide students with
        a comprehensive science education.
      </p>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={SciLabs}
              class="d-block w-100"
              alt="science lab photos"
              height={550}
              width={550}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">
                Ngami Secondary School Biology/Chemistry Lab
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={LabPrac}
              class="d-block w-100"
              alt="lab prac photos"
              height={550}
              width={550}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">
                Students undertaking a practical in the Chem Lab
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
      <h5>Chemistry Lab</h5>
      <p>
        The chemistry laboratory at Ngami Secondary School is a state-of-the-art
        facility that is equipped with all the necessary tools to conduct
        experiments safely and accurately. Students have access to a wide range
        of laboratory equipment, including burettes, pipettes, beakers, and test
        tubes, which they use to conduct chemical reactions. The experiments
        carried out in this lab are diverse, ranging from acid-base titrations
        to redox reactions and organic chemistry experiments.
      </p>
      <h5>Physics Lab</h5>
      <p>
        The physics laboratory at Ngami Secondary School is also a modern
        facility that is equipped with various pieces of equipment, including
        pendulums, springs, pulleys, meters, and power supplies. Students use
        this equipment to conduct experiments and learn about fundamental
        principles such as mechanics, electricity, magnetism, and optics. Some
        of the experiments carried out in the physics lab include the
        measurement of the speed of light, the study of projectile motion, and
        the analysis of electric circuits.
      </p>
      <h5>Biology Lab</h5>
      <p>
        The biology laboratory at Ngami Secondary School is designed to provide
        students with hands-on experiences that enable them to learn about the
        structure and function of living organisms. The lab is equipped with a
        variety of equipment, including microscopes, slides, petri dishes, and
        culture media. Students conduct experiments that range from dissecting
        and studying specimens to analyzing genetic material using
        electrophoresis. Some of the experiments carried out in this lab include
        the study of cell structure and many more.
      </p>
      <h5>The Importance of the Science Labs</h5>
      <p>
        The science laboratories at Ngami Secondary School play a crucial role
        in the education of students. These labs provide students with an
        opportunity to apply theoretical concepts learned in the classroom to
        practical experiments. Through these experiments, students develop
        skills such as critical thinking, problem-solving, and data analysis,
        which are essential for success in any scientific career.
        <br /> In addition, the science laboratories at Ngami Secondary School
        help students develop an interest in science and encourage them to
        pursue careers in the field. By providing well-equipped and modern labs,
        the school is equipping students with the knowledge and skills they need
        to succeed in science-related fields.
      </p>
    </div>
  );
}

export default SciLab;
