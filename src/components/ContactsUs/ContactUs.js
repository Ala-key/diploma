import React from 'react';
import './ContactUs.css';


const ContactUs = () => {

  return (
    <div className="contacts-container container">
      <h2 className="contacts-heading">Contact us</h2>
      <div className="contact-details">
        <p>
          <strong className="contact-label">Address:</strong>  Bishkek, Kyrgyzstan  Bishkek Park
        </p>
        <p>
          <strong className="contact-label">Phone:</strong>+996 707 848 436
        </p>
        <p>
          <strong className="contact-label">Email:</strong> almir.abdrasulov@mail.ru
        </p>
        <p>
          <strong className="contact-label">Working Hours:</strong> Monday to Friday, 9:00 AM - 8:00 PM
        </p>
      </div>
    </div>
  );
};

export default ContactUs;