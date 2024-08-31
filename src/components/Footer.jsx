import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="col">
        <h1>Contact US</h1>
        <a href="/">Email Us: sales@asimjofa.com</a>
        <a href="/">Call Us: +92-21-111-11JOFA (5632)</a>
        <a href="/">Whatsapp Us: +923211244440</a>
        <a href="/">Contact Us</a>
        <a href="/">FAQs</a>
        <div className="react-icons">
          <FaFacebookF/>
          <FaTwitter/>
          <FaInstagram/>
          <FaPinterest/>

        </div>
      </div>
      <div className="col">
        <h1>Customer Care</h1>
        <a href="/">My Account</a>
        <a href="/">Track your order</a>
        <a href="/">Contact Us</a>
        <a href="/">FAQs</a>
      </div>
      <div className="col">
        <h1>INFORMATION</h1>
        <a href="/">About</a>
        <a href="/">Stockists</a>
        <a href="/">Whole sale</a>
        <a href="/">Blogs</a>
      </div>
      <div className="col">
        <h1>Policies</h1>
        <a href="/">Privacy Policy</a>
        <a href="/">Shipping Policy</a>
        <a href="/">Ordering & Tracking</a>
        <a href="/">Terms & Conditions</a>
      </div>
      <div className="col">
        <h1>Newsletter SignUp</h1>
        <p>Sign Up to recieve latest update from Asim jofa</p>
        <div> <input type="text" placeholder="Email"/><button className="btn">Subscribe</button></div>
       
        
        
      </div>
    </div>
  );
};

export default Footer;
