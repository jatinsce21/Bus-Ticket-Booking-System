import React from "react";
import SearchBusBox from "../Containers/SearchBusBox";

const SearchBus = () => {
  return (
    <div className="container">
      <div className="card bg-danger mx-auto mt-3 p-3">
        <form className="row">
          <div className="form-group col-md-4">
            <label className="text-white" htmlFor="form">
              From:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="From"
              id="form"
            />
          </div>
          <div className="form-group col-md-4">
            <label className="text-white" htmlFor="to">
              To:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="To"
              id="to"
            />
          </div>
          <div className="form-group col-md-3">
            <label className="text-white" htmlFor="date">
              Date:
            </label>
            <input
              type="date"
              className="form-control"
              placeholder="Date"
              id="date"
            />
          </div>
          <div className="form-group col-md-1 mt-auto">
            <button type="submit" className="btn btn-light">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>

      <div className="mt-5">
        <div className="row">
          <div className="col-md-4">
            <SearchBusBox />
          </div>
          <div className="col-md-4">
            <SearchBusBox />
          </div>
          <div className="col-md-4">
            <SearchBusBox />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-4">
            <SearchBusBox />
          </div>
          <div className="col-md-4">
            <SearchBusBox />
          </div>
          <div className="col-md-4">
            <SearchBusBox />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-4">
            <SearchBusBox />
          </div>
          <div className="col-md-4">
            <SearchBusBox />
          </div>
          <div className="col-md-4">
            <SearchBusBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBus;
