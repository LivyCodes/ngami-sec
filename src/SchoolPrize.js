import React from "react";
import "./SchoolPrize.css";
import PrizeGiving from "./Images/prizegiving.jpg";
import PrizeGiving2 from "./Images/prizegiving2.jpg";

function SchoolPrize() {
  return (
    <div>
      <h3>SCHOOL PRIZES & AWARDS CRITERIA </h3>
      <p>
        At Ngami Secondary School, prizes and awards are awarded in all forms to
        the outstanding students and even faculty in both academic and
        non-academic fields.
      </p>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={PrizeGiving}
              class="d-block w-100"
              alt="Prize giving photos"
              height={600}
              width={600}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">Prize Giving Award Ceremony</h5>
              <p className="custom-p">
                Chief Principal Mr Severine Tole awarding a top student in Form
                1
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={PrizeGiving2}
              class="d-block w-100"
              alt="Prize giving photos"
              height={600}
              width={600}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="custom-heading">Prize Giving Award Ceremony</h5>
              <p className="custom-p">
                Chief Principal Mr Severine Tole awarding a top student.
              </p>
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
      <table class="table table-hover custom-table">
        <thead>
          <tr>
            <th scope="col">ITEM</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">CRITERIA</th>
            <th scope="col">AWARD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan="4" className="text-center">
              INTERNAL AWARDS
            </th>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Opening Exams</td>
            <td>Position 1</td>
            <td>3 exercise books and 1 pen</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Position 2</td>
            <td>2 exercise books and 1 pen</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Position 3</td>
            <td>1 exercise books and 1 pen</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Midterm Exams</td>
            <td>Position 1</td>
            <td>3 exercise books and 1 pen</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Position 2</td>
            <td>2 exercise books and 1 pen</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Position 3</td>
            <td>1 exercise books and 1 pen</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Endterm Exams</td>
            <td>Position 1</td>
            <td>Trophy, certificate,3 exercise books,1 pen, 1 loaf</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Position 2</td>
            <td>Certificate, 2 exercise books and 1 pen</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Position 3</td>
            <td>1 exercise books, 1 pen and ½ loaf</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Annual awards</td>
            <td>Best per subject</td>
            <td>Certificate</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Achievers party</td>
            <td>Top 10 per class</td>
            <td>Goat party</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Academic party</td>
            <td>Best class</td>
            <td>Goat party</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Academic retreat</td>
            <td>Top 10 per class/2 most improved classes</td>
            <td>Academic trip</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Best house(Termly)</td>
            <td>Winners party</td>
            <td>1 goat</td>
          </tr>
          <th colspan="4" className="text-center">
            PRIZE GIVING AWARDS
          </th>
          <tr>
            <th scope="row">9</th>
            <td>Top student</td>
            <td>A-A-</td>
            <td>Laptop(40000)</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Outstanding student</td>
            <td>Outgoing council chairman</td>
            <td>1000</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Outstanding student</td>
            <td>Most disciplined</td>
            <td>500</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Outstanding student</td>
            <td>Neatest</td>
            <td>200</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>Staff motivation</td>
            <td>All teaching staff</td>
            <td>3000 per teacher</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Annual non-teaching staff party</td>
            <td>50000</td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td>Quality grades</td>
            <td>A(plain)</td>
            <td>1100</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>A-</td>
            <td>1000</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>B+</td>
            <td>900</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>B</td>
            <td>700</td>
          </tr>
          <tr>
            <th scope="row">13</th>
            <td>Best subjects</td>
            <td>Position 1</td>
            <td>2000</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Position 2</td>
            <td>1700</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Position 3</td>
            <td>1400</td>
          </tr>
          <tr>
            <th scope="row">14</th>
            <td>Positive index</td>
            <td>Position 1</td>
            <td>2000</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Position 2</td>
            <td>1700</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Position 3</td>
            <td>1400</td>
          </tr>
          <tr>
            <th scope="row">15</th>
            <td> Mean score</td>
            <td>Above school mean</td>
            <td>1000</td>
          </tr>
          <tr>
            <th scope="row">16</th>
            <td>Best house master</td>
            <td>Position 1</td>
            <td>2000</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Position 2</td>
            <td>1500</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Position 3</td>
            <td>1000</td>
          </tr>
          <tr>
            <th scope="row">17</th>
            <td>Co-curricula</td>
            <td>National</td>
            <td>3000</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Regional</td>
            <td>2500</td>
          </tr>
          <tr>
            <th scope="row">18</th>
            <td>POYA/TOYA</td>
            <td>As per TSC/MOEST guideline</td>
            <td>10000</td>
          </tr>
          <tr>
            <th scope="row">19</th>
            <td>Accomodation area</td>
            <td>House master</td>
            <td>2000</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>assistant</td>
            <td>1500</td>
          </tr>
          <tr>
            <th scope="row">20</th>
            <td>Tuition area</td>
            <td>Form principal</td>
            <td>2500</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>class teacher</td>
            <td>2000</td>
          </tr>
          <tr>
            <th scope="row">21</th>
            <td>Managements</td>
            <td>HODs</td>
            <td>3500</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>D.O.S</td>
            <td>4000</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Deputy principal</td>
            <td>5000</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>Principal</td>
            <td>6000</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>BOM chair</td>
            <td>5000</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>PTA chair</td>
            <td>3000</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>PTA members(O/G)</td>
            <td>4000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SchoolPrize;
