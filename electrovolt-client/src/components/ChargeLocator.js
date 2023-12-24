
import React,{useEffect} from 'react';
import './ChargeLocator.css'; // Import the corresponding CSS file for styling
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChargeLocator = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Set the duration of the animation
          offset: 100,
          once: false, // Only animate once
        });
      }, []);
    
  return (
    // <div>
       
    <div className="charge-locator-container">
            
            <div className="map-container">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520346.028877583!2d74.20073982374853!3d20.338006073976866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7dadc6d62d%3A0x8fbc4ba51b1ad7e7!2sIndia!5e0!3m2!1sen!2sus!4v1638255055004!5m2!1sen!2sus"
                width="100%"
                height="130%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="contact-form1" data-aos="fade-left">
              <br/>
                <h2>Charger Locator</h2>
                <form autoComplete="off">
                  <label htmlFor="name">Search:</label>
                  <input type="text" id="name" name="name" autoComplete="off" />
                </form>
                <h2>Trip Planner </h2>
                <form>  
                  <label htmlFor="email">From:</label>
                  <input type="email" id="email" name="email" autoComplete="off"/>


                  <label htmlFor="phone">To:</label>
                  <input type="tel" id="phone" name="phone"  autoComplete="off"/>

                </form>
            </div>
    </div>
    
   
  );
};

export default ChargeLocator;
