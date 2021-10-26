import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left item">
        <span className="footer_header">About Company</span>
        <hr className="hr" />
        Experience Safe Online Shopping with Gshop. It has started with the aim
        of providing essesntials to public safe and sound during pandemic.
        Always there to serve you.
      </div>
      <div className="footer_middle item"> &copy; Copyright 2021</div>
      <div className="footer_right item">
        <span className="footer_header">Connect with us</span>
        <hr className="hr" />
        facebook
        <br />
        instagram
        <br />
        Gmail
      </div>
    </div>
  );
}

export default Footer;
