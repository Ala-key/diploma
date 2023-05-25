import React from 'react';
import './AboutUs.css';
import img from "../../assets/avtosalon.jpg"
import img2 from "../../assets/avtosalon2.jpg"
import img3 from "../../assets/avtosalon3.jpg"

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-content">
        <div className="about-text">
          <h3>Welcome to Our Online Auto Shop!</h3>
          <p>
            Welcome to Auto Mania, your premier destination for all your automotive needs. At Auto Mania, we are passionate about cars and providing exceptional services to ensure your vehicle runs smoothly and efficiently.
          </p>
          <p>
            With years of experience in the automotive industry, our skilled technicians are dedicated to providing top-notch maintenance and repair services for all makes and models. Whether you need a routine oil change, brake inspection, or major engine repair, we have the expertise and state-of-the-art equipment to get the job done right.
          </p>
          <p>
            We understand that your vehicle is an important investment, and we strive to deliver the highest level of customer satisfaction. Our friendly and knowledgeable staff is always ready to answer your questions, provide expert advice, and assist you in making informed decisions about your vehicle's maintenance and repair.
          </p>
        </div>
        <div className="about-image">
          <div className="image-container">
            <img src={img} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;