import React from "react";

const Hero = () => {
  return (
    <div
      className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column"
      style={{ height: "50vh" }}
    >
      <div
        className="circle"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "orangered",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "50px", color: "white" }}>D-News</h1>
      </div>
      <h5 className="my-5">THE WEBSITE IS BUILT WITH THE NEWS API.</h5>
    </div>
  );
};

export default Hero;
