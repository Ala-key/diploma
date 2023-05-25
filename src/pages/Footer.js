import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {BsTwitter} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3 className="titles">Site Map</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/deliver">Deliver</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="titles">Categories</h3>
            <ul>
              <li>
                <Link to="/categories/mercedes">Mercedes</Link>
              </li>
              <li>
                <Link to="/categories/ford">Ford</Link>
              </li>
              <li>
                <Link to="/categories/bmw">
                  Bmw
                </Link>
              </li>
              <li>
                <Link to="/categories/chevrolet">Chevrolet</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="titles">Contact Us</h3>
            <p>
              Bishkek Park
              <br /> Bishkek, Kyrgyzstan
            </p>
            <p>
              Phone: +996 707 848 436
              <br /> Email: almir.abdrasulov@mail.ru
            </p>
          </div>
          <div className="col-md-3">
            <h3 className="titles mar-left">Follow Us</h3>
            <ul className="social-media">
              <li>
                <BsFacebook id="fac"/>             
              </li>
              <li>
                <a href="https://twitter.com">
                 <BsTwitter id="twit"/>
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <BsInstagram id="inst"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;