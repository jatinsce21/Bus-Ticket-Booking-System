import React, { useState } from "react";

const BusPage = () => {
  const [buses, setBuses] = useState([]);

  const fetchBuses = async () => {
    try {
      const response = await fetch("http://localhost:4000/addbus");
      if (response.ok) {
        const data = await response.json();
        setBuses(data);
      } else {
        console.error("Error fetching buses:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching buses:", error);
    }
  };

  useState(() => {
    fetchBuses();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src={require("../Assets/Images/busimage.jpg")}
            height="400px"
            width="100%"
            alt="Bus"
          />
          <div className="busdec text-danger">
            <div className="row">
              <div className="col-4">
                <label>Name :</label>
              </div>
              <div className="col-8">
                <span> Tours & Travels </span>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <label>From :</label>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <label>Date :</label>
              </div>
              <div className="col-3">
                <label>Time :</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            {buses.map((bus, index) => (
              <div key={index} className="col-2 mt-2">
                <div
                  className="bussetprint text-white"
                  style={{ height: "100px", width: "100px" }}
                >
                  {bus.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusPage;
