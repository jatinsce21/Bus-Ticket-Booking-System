import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="card bg-danger col-md-8 mx-auto mt-5 p-0">
        <div className="card-header bg-white text-danger">
          <h1 className="login-head text-center">Contact Us</h1>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group row">
              <div className="col-md-6">
                <label className="text-white" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Name"
                />
              </div>
              <div className="col-md-6">
                <label className="text-white" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="text-white" htmlFor="message">
                Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                placeholder="Enter Message"
                rows="5"
                style={{ border: "2px solid white" }}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-light btn-block">
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
