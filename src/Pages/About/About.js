import React from "react";
import razob from "../../Image/razob-bg.png";

const About = () => {
  return (
    <div>
      {/* <h1 className="text-center my-4">About Me </h1> */}
      <div className="row">
        <div className=" col-md-6 my-5 d-flex justify-content-center align-items-center">
          <img className="w-75" src={razob} alt="" />
        </div>
        <div className="col-md-6 my-5">
            <h1>Hello! My name is Ridwan Elahee</h1>
          <h3>
             I’m a web designer and front-end
            web developer.
          </h3>
          <p>Im finish my course then find job. </p>
        </div>
      </div>
    </div>
  );
};

export default About;
