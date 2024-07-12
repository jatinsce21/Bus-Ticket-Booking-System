import React from "react";
import AboutBox from "../Containers/AboutBox";

const About = () => {
  const data = [
    {
      img: "benefits.png",
      title: "UNMATCHED BENEFITS",
      description:
        "We take care of your travel beyond ticketing by providing you with innovative and unique benefits.",
    },
    {
      img: "customer_care.png",
      title: "SUPERIOR CUSTOMER SERVICE",
      description:
        "We put our experience and relationships to good use and are available to solve your travel issues.",
    },
    {
      img: "lowest_Fare.png",
      title: "LOWEST PRICES",
      description: "We always give you the lowest price with the best partner offers.",
    },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-sm-12 col-md-6 text-center order-2 order-md-1">
          <img
            src={require(`../Assets/Images/about image.png`)}
            className="img-fluid rounded"
            alt="About Us"
          />
        </div>
        <div className="col-sm-12 col-md-6 text-center">
          <h2 className="mb-4">Welcome to Tours & Travels</h2>
          <p className="text-justify">
            Tours & Travels is your one-stop platform for all your travel needs.
            Whether you're looking for unbeatable benefits, superior customer
            service, or the lowest prices, we've got you covered. Our dedicated
            team ensures that your travel experience is seamless and unforgettable.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        {data.map((item, index) => (
          <div key={index} className="col-sm-6 col-md-4 mb-4 col-lg-4">
            <AboutBox item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
