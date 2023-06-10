import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-dark text-white">
      <h4>© MishraDev {currentYear}</h4>
    </div>
  );
};

export default Footer;
