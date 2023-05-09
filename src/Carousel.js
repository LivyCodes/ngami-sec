import React from "react";
import Cols from "./Cols";
import "./Carousel.css";

function Carousel() {
  return (
    <div>
      <h3 className="welcome">Welcome to Ngami Secondary School</h3>
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
