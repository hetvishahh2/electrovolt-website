// ChargeLocator.js
// ChargeLocator.js
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
       
      <div className="search-bar">
      
        <div className="text-box-container">
        <h2 className="fonts" data-aos="fade-up">Charger Locator </h2>
            <div className="text-box">
            
                <label htmlFor="textBox1">Search:</label>
                <input type="text" id="textBox1" name="textBox1" />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 className="fonts1" data-aos="fade-up">Trip Planner </h2>
            <div className="text-box">
                <label htmlFor="textBox2">From:</label>
                <input type="text" id="textBox2" name="textBox2" />
            </div>

            <div className="text-box">
                <label htmlFor="textBox3">To:</label>
                <input type="text" id="textBox3" name="textBox3" />
            </div>
      </div>

      <div className="map-container">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520346.028877583!2d74.20073982374853!3d20.338006073976866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7dadc6d62d%3A0x8fbc4ba51b1ad7e7!2sIndia!5e0!3m2!1sen!2sus!4v1638255055004!5m2!1sen!2sus"
          width="92%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
     
       
    </div>
    
   
  );
};

export default ChargeLocator;
