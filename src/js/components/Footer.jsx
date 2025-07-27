import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
