import React from "react";
import { Link } from "react-router-dom";

const SearchBusBox = () => {
  return (
    <>
      <div class="card p-2">
        <div class="row">
          <div
            class="imagebus col-4"
            style={{ height: "100px", width: "100px" }}
          >
            <img
              src={require(`../Assets/Images/busimage.jpg`)}
              height="100%"
              width="100%"
              alt="jb"
            />
          </div>
          <div class="description col-8 text-danger">
            <div class="des text-justify">Form : Ahmedabad To : Rajkot</div>
            <div class="des text-justify">time : 10:00 AM / 03:00 AM</div>
            <div class="book ml-5 mt-2">
              <Link to="/buspage" class=" p-1 text-white bg-danger">
                Book Bus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBusBox;
