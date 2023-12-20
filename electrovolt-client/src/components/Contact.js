// ContactUs.js
import React, { useState,useEffect } from 'react';
import './Contact.css'; // Create a corresponding CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
      offset: 100,
      once: false, // Only animate once
    });
  }, []);

  const [showDialog, setShowDialog] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div>
<div className="contact-us" >
      <div className="contact-info" data-aos="fade-right">
      <h2>Contact Information</h2>
        {/* <img
            className="imgdets"
            src="/images/contactus.jpg" 
            alt="Contact Image"
          /> */}
       {/* <h3>Address: </h3> */}
        <p>
          Address:<br/> <br/>Electrovolt, 305, Third Floor, <br />
          Centre Point, Opp. Bai <br />
          Avabai High School, 396001<br />
          Valsad, Gujarat, India<br />
          {/* Phone: +91 9687558299<br /> */}
          <div className="mail-box">
            <br/>
                    Email: <p>info_hub@electrovolt.in</p>
                    <button onClick={() => window.open('mailto:info_hub@electrovolt.in')}>Send Email</button>
          </div>
        </p>
      </div>
      <div className="contact-form" data-aos="fade-left">
        <h2>Send us a Message!</h2>
        <div className={`dialog ${showDialog ? 'show' : ''}`}></div>
        <form autoComplete="off">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} autoComplete="off" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} autoComplete="off" required />


          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} autoComplete="off" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} autoComplete="off" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} autoComplete="off" required />

          <button type="submit" onClick={handleSubmit}>Send Message</button>
        </form>
      </div>
     
    </div>
    
    </div>
    
  );
};

export default Contact;
