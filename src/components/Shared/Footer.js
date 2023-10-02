import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <hr className="opacity-5 hidden md:block" />
      <section className="max-w-6xl w-full mx-auto my-0 md:block footer footer-center px-4 py-12 text-base-content">
        <div className="flex items-center justify-between">
          <p className="text-base">
            Copyright © 2023 <span className="text-infoColor">AIEmployeeHelper</span> -
            All right are reserved
          </p>
          <div className="flex items-center gap-4">
            <Link to="https://www.facebook.com/sheikhfoysal3442/">
              <i className="fa-brands fa-facebook text-3xl"></i>
            </Link>
            <Link to="https://www.linkedin.com/in/sheikhfoysal/">
              <i className="fa-brands fa-linkedin text-3xl"></i>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
