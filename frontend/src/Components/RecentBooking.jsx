import React from "react";

const RecentBooking = () => {
  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover text-center">
          <thead className="bg-danger text-white">
            <tr>
              <th>Name</th>
              <th>Journey Date</th>
              <th>Email</th>
              <th>Bus Details</th>
              <th>Seat Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Demo</td>
              <td>11/11/2023</td>
              <td>test@gmail.com</td>
              <td>Ambd / Rajkot</td>
              <td>23/24</td>
            </tr>
            <tr>
              <td>abc</td>
              <td>11/11/2023</td>
              <td>abc@gmail.com</td>
              <td>Ambd / Pbr</td>
              <td>23/24</td>
            </tr>
            <tr>
              <td>xyz</td>
              <td>11/11/2023</td>
              <td>xyz@gmail.com</td>
              <td>Pbr / Rajkot</td>
              <td>23/24</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBooking;
