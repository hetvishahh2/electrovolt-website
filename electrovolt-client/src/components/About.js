// AboutUs.js
// import React from 'react';
import './About.css'; // Create a corresponding CSS file
import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
      offset: 100,
      once: false, // Only animate once
    });
  }, []);

  return (
    
    <div className="about-us">
      <section className="mission-section" >
        <div className="section-content" data-aos="fade-up">
        
        <img src="/images/aboutus.png" loading="lazy" alt="" className="mission-image" />
          
        </div>
      </section>

      <section className="company-info-section"  >
        <div className="section-content1" data-aos="fade-up" >
          <h2 className='hii'>Electrovolt</h2>
          <p className='hii'>
          Electrovolt spearheads the electric vehicle revolution, 
          pioneering cutting-edge charging solutions tailored for a 
          diverse spectrum of electric vehicles, ranging from cars 
          to buses and trucks. Our dedication to providing reliable 
          charging solutions is unwavering, driven by a commitment 
          to shaping the future of sustainable transportation. 
          Our strategically positioned charging stations redefine 
          convenience, instilling peace of mind that empowers you 
          to drive without fear. Experience the seamless integration 
          of advanced technology with a dependable charging network, 
          as we pave the way for a greener and more efficient future
           in electric mobility.
           Our commitment to sustainability, innovation, and 
          reliability distinguishes 
          Electrovolt in the dynamic realm of clean transportation. 
          These additional features are designed to complement 
          your electric vehicle charging experience, providing you
           with enhanced convenience, flexibility, and control. 
           As we pave the way for the future of electric mobility,
            Electrovolt remains dedicated to offering 
            comprehensive solutions that align with the evolving 
            needs of a sustainable and technology-driven world.
          </p>
          
        </div>
        <div className="section-content2" data-aos="fade-up">
        <div className="red-arrow-list">
            <div className='hii'>
              <span>&rarr;</span> Real-time Availability: Access the current status of our charging stations in real-time through our user-friendly mobile app or website.
              </div>
            
              <div className='hii'>
              <span>&rarr;</span> Priority Charging: Enjoy the convenience of priority reservations during peak hours with Electrovolt's specialized app.
              </div>
              <div className='hii'>
              <span>&rarr;</span> Charging Station Locator: Easily locate the nearest Electrovolt charging station using our intuitive locator tool.
              </div>
          </div>
        </div>
      </section>

      

     
    </div>
  );
};

export default About;

