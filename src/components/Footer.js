import React from "react";

import { InstagramIcon, FacebookIcon, TwitterIcon, LogoIcon } from "./Svgs";

export const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer">
      <div className="left-content">
        <LogoIcon />
        <p className="about-company">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal.
        </p>
      </div>
      <div className="center-content">
        <h2 className="footer-title">Contact Us</h2>
        <p>jwzad@yahoo.com</p>
        <p>4907 Buena Vista Avenue, Oregon</p>
        <p>+40 031 123 41 58</p>
      </div>
      <div className="right-content">
        <h2 className="footer-title">Follow Us</h2>
        <div className="social-medias">
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
    <div className="copyrights">
      <p>&copy; 2018 JWZAD All rights reserved</p>
    </div>
  </div>
);
