import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <div class="container">
        <div class="card bg-danger col-md-6 ml-auto mr-auto p-0 pb-2 pr-2 pl-2 m-0">
          <div class="card-header bg-white text-danger m-0">
            <h1 class="login-head">Customer Regristation</h1>
          </div>
          <div class="card-body"></div>

          <form action="">
            <div class="row">
              <div class="form-group col-md-6">
                <label class="text-white" for="First name">
                  First Name :
                </label>
                <input
                  type="text"
                  class="form-control form-input"
                  placeholder="Enter First Name"
                  id="First Name"
                />
              </div>
              <div class="form-group col-md-6">
                <label class="text-white" for="Last name">
                  Last Name :
                </label>
                <input
                  type="text"
                  class="form-control form-input"
                  placeholder="Enter Last Name"
                  id="Last Name"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label class="text-white" for="Contect Number">
                  Contect Number :
                </label>
                <input
                  type="number"
                  class="form-control form-input"
                  placeholder="Enter Contect Number"
                  id="Contect Number"
                />
              </div>
              <div class="form-group col-md-6">
                <label class="text-white" for="Gender">
                  Gender :
                </label>
                <br />
                <span class="text-white">Male</span>&emsp;
                <input type="radio" value="male" name="gender" />
                &emsp;
                <span class="text-white">Female</span>&emsp;
                <input type="radio" value="female" name="gender" />
              </div>
            </div>
            <div class="form-group">
              <label class="text-white" for="email">
                Email :
              </label>
              <input
                type="email"
                class="form-control form-input"
                placeholder="Enter email"
                id="email"
              />
            </div>
            <div class="form-group">
              <label class="text-white" for="pwd">
                Password :
              </label>
              <input
                type="password"
                class="form-control form-input"
                placeholder="Enter password"
                id="pwd"
              />
            </div>
            <button type="submit" class="btn">
              Create Account
            </button>
          </form>
          <div class="text-white">
            Do you have an account
            <Link to={"/login"} class="forma">
              Login Here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
