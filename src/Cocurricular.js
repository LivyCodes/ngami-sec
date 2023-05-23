import React from "react";
import Games from "./Images/games222.jpg";
import CoCurricular from "./Images/cocurricular.jpg";
import Volleyball from "./Images/volley.jpg";

function Cocurricular() {
  return (
    <div>
      <h3>Co-Curricular Activities</h3>
      <p>
        Ngami Secondary School is renowned for providing students with a
        well-rounded education that extends beyond academics.Through basketball,
        volleyball, netball, football, and drama, students have the opportunity
        to develop physical fitness, teamwork, discipline, creativity, and other
        essential life skills. The school recognizes the importance of
        co-curricular activities in the holistic development of students. The
        school provides dedicated facilities, experienced coaches, and ample
        opportunities to participate in friendly matches and competitive events.
        By engaging in these co-curricular activities, students at Ngami
        Secondary School are encouraged to discover and nurture their talents,
        fostering holistic growth and personal development.
      </p>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
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
          <div class="carousel-item">
            <img
              src={Volleyball}
              class="d-block w-100"
              alt="Boys football photos"
              height={600}
              width={550}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">Boys Volleyball Team</h5>
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
      <ol>
        <li>
          <h5>Basketball for boys</h5>
          <p>
            Ngami Secondary School offers basketball as a co-curricular activity
            for boys. This sport helps students develop physical fitness,
            teamwork, and strategic thinking. The school provides a dedicated
            basketball court and trained coaches who guide the students in
            honing their skills. Students have the chance to participate in
            friendly matches and competitive tournaments, fostering healthy
            competition and a sense of sportsmanship.
          </p>
        </li>
        <li>
          <h5>Volleyball for both boys and girls</h5>
          <p>
            Ngami Secondary School encourages both boys and girls to participate
            in volleyball. This dynamic sport promotes agility, coordination,
            and teamwork. The school provides well-maintained volleyball courts
            and experienced coaches who train the students. Regular practice
            sessions and competitive matches allow students to enhance their
            skills, build camaraderie, and represent the school in inter-school
            competitions.
          </p>
        </li>
        <li>
          <h5>Netball for girls</h5>
          <p>
            Netball is a popular co-curricular activity for girls at Ngami
            Secondary School. This fast-paced sport emphasizes teamwork,
            agility, and strategic thinking. The school provides dedicated
            netball courts and knowledgeable coaches who guide the students.
            Regular training sessions and friendly matches help students refine
            their skills, strengthen team bonds, and compete against other
            schools.
          </p>
        </li>
        <li>
          <h5>Football for boys</h5>
          <p>
            Football is a beloved sport offered as a co-curricular activity for
            boys at Ngami Secondary School. The school has well-maintained
            football fields and skilled coaches who train the students in
            various aspects of the game. Students have the opportunity to
            participate in local leagues and tournaments, representing the
            school with pride. Football promotes physical fitness, discipline,
            and teamwork, fostering a sense of camaraderie among the players.
          </p>
        </li>
        <li>
          <h5>Drama Club</h5>
          <p>
            Ngami Secondary School recognizes the importance of creative
            expression and offers drama as a co-curricular activity. Students
            with a passion for acting and storytelling can showcase their
            talents through various theatrical productions. The school provides
            a dedicated drama club, rehearsal spaces, and experienced drama
            instructors who guide the students. Participation in drama helps
            students build confidence, express their creativity, and develop
            skills in communication and teamwork.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default Cocurricular;
