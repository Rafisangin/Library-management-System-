
import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer overflow-hidden">
      <div className="container-fluid py-4 text-center">
        <h5 className="fw-bold text-light ">Rafi.com</h5>
        <p className="text-light">محصل پوهنتون هرات</p>
        <div className="footer-icons">
              <a href="#"><img src="image/twitter.svg" alt="" className="img-fluid" /></a>
              <a href="#"><img src="image/facebook.svg" alt="" className="mx-2 img-fluid" /></a>
              <a href="#"><img src="image/instagram.svg" alt="" className="img-fluid" /></a>
              <a href="#"><img src="image/linkedin.svg" alt="" className="mx-2 img-fluid" /></a>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
