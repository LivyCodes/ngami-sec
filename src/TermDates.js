import React from "react";

function TermDates() {
  return (
    <div>
      <h3 className="text-center">2023 Academic Calendar</h3>
      <table class="table table-striped table-hover custom-table">
        <thead>
          <tr>
            <th scope="col">Activity</th>
            <th scope="col">Opening Dates</th>
            <th scope="col">Closing Dates</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Term 1</th>
            <td>23/01/2023</td>
            <td>21/04/2023</td>
            <td>13 weeks</td>
          </tr>
          <tr>
            <th scope="row">Half-term Break</th>
            <td>26/03/2023</td>
            <td>9/04/2023</td>
            <td>3 days</td>
          </tr>
          <tr>
            <th scope="row">Holiday</th>
            <td>22/04/2023</td>
            <td>7/05/2023</td>
            <td>2 weeks</td>
          </tr>
          <tr>
            <th scope="row">Term 2</th>
            <td>8/05/2023</td>
            <td>11/08/2023</td>
            <td>14 weeks</td>
          </tr>
          <tr>
            <th scope="row">Half-term Break</th>
            <td>29/06/2023</td>
            <td>2/07/2023</td>
            <td>3 days</td>
          </tr>
          <tr>
            <th scope="row">Holiday</th>
            <td>12/08/2023</td>
            <td>27/08/2023</td>
            <td>2 weeks</td>
          </tr>
          <tr>
            <th scope="row">Term 3</th>
            <td>28/08/2023</td>
            <td>3/11/2023</td>
            <td>10 weeks</td>
          </tr>
          <tr>
            <th scope="row">KCPE</th>
            <td>6/11/2023</td>
            <td>9/11/2023</td>
            <td>4 days</td>
          </tr>
          <tr>
            <th scope="row">KCSE</th>
            <td>10/11/2023</td>
            <td>1/12/2023</td>
            <td>3 weeks 1 day</td>
          </tr>
          <tr>
            <th scope="row">KCSE MARKING</th>
            <td>4/12/2023</td>
            <td>22/12/2023</td>
            <td>3 weeks</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TermDates;
