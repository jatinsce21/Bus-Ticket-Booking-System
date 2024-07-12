import React from "react";
import background1 from "../Assets/Images/bookbus.png";
import background2 from "../Assets/Images/busbooking.jpg";

const Home = () => {
  return (
    <>
      <div className="container mb-3">
        <div className="jumbotron jumbotron-fluid bg-danger text-white mb-0" style={{ backgroundImage: `url(${background1})`, backgroundSize: "cover" }}>
          <div className="container">
            <h1 className="display-4 text-center">Book Your Bus Ticket with Us</h1>
          </div>
        </div>

        <div className="row mt-5 d-flex flex-wrap justify-content-center">
          <div
            className="col-lg-6 col-md-8 col-12 px-4"
            style={{
              padding: "50px",
              backgroundImage: `url(${background1})`,
              backgroundSize: "cover",
            }}
          >
            <div className="card bg-white text-danger homebuscard h-100">
              <blockquote className="text-justify p-4">
              Who doesn’t love exploring places by road? The captivating
                landscapes that are seen on both sides of the bus are the sites
                to behold. Travelers who love to explore places by road can
                choose online bus booking at Tours & Travels and also save huge
                money. Why would you go out and look for a travel agency to book
                a tour bus when you can do it by yourself? It takes less than a
                minute to book a bus ticket at Tours & Travels. The simple
                interface, easy navigation, and fast speed of the portal allow
                you to book a bus to your favorite destination within a few
                seconds.
              </blockquote>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-8 col-12 px-4"
            style={{
              padding: "50px",
              backgroundImage: `url(${background2})`,
              backgroundSize: "cover",
            }}
          >
            <div className="card badge-danger h-100 text-white homebuscard">
              <blockquote className="text-justify p-4">
              Whether you want to travel via AC/Non-AC bus, semi-sleeper bus,
                smart bus, deluxe bus, luxury bus, budgeted bus, or Volvo bus
                booking Tours & Travels has got everything covered for you.
                Enjoy a hassle-free booking experience at Tours & Travels and
                discover your favorite place. There are around 2000+ bus
                operators for online bus ticket booking at this portal, choose
                the best one that suits your bus ticket booking demand and enjoy
                your bus journey like never before!
              </blockquote>
            </div>
          </div>
        </div>        
        <div className="row mt-5 justify-content-center">
          <div className="col-md-8 text-center">
            <div className="bg-danger text-white p-5 rounded">
              <h2>Ready to Book Your Bus Ticket?</h2>
              <p className="lead">Get started now and explore your favorite destinations with ease!</p>
              <button className="btn btn-lg btn-light">Book Now</button>
            </div>
          </div>
        </div>        
      </div>
    </>
  );
};
export default Home;
