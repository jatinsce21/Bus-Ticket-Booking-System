import React, { useState } from "react";

const Addbus = () => {
  const [name, setName] = useState("");
  const [busRouteFrom, setBusRouteFrom] = useState("");
  const [busRouteTo, setBusRouteTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleAddBus = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("busRouteFrom", busRouteFrom);
    formData.append("busRouteTo", busRouteTo);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:4000/addbus", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        console.log("Bus added successfully");
        // Optionally redirect to another page or show a success message
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="card bg-danger col-md-4 ml-auto mr-auto p-0 pb-2 pr-2 pl-2 m-0">
          <div className="card-header bg-white text-danger m-0">
            <h1 className="login-head">Add Bus</h1>
          </div>
          <div className="card-body"></div>

          <form onSubmit={handleAddBus}>
            <div className="form-group">
              <label className="text-white" htmlFor="Name">
                Name :
              </label>
              <input
                type="text"
                className="form-control form-input"
                placeholder="Enter Bus Name"
                id="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="text-white" htmlFor="BusRouteFrom">
                  Bus Route From :
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Bus Route From"
                  id="BusRouteFrom"
                  value={busRouteFrom}
                  onChange={(e) => setBusRouteFrom(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label className="text-white" htmlFor="BusRouteTo">
                  Bus Route To :
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Bus Route To"
                  id="BusRouteTo"
                  value={busRouteTo}
                  onChange={(e) => setBusRouteTo(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="text-white" htmlFor="Date">
                  Date :
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label className="text-white" htmlFor="Time">
                  Time :
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Time"
                  id="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="text-white" htmlFor="Image">
                Image :
              </label>
              <input
                type="file"
                className="form-control form-input border-0"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn">
              Add Bus
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addbus;
