// Solutions.js
import React,{useEffect} from 'react';
import './Solutions.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Solutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
      offset: 100,
      once: false, // Only animate once
    });
  }, []);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


// const Solutions = () => {
  return (
    <div>
      
      <div className="solutions" >
      <nav className="navigation1" data-aos="fade-up">
          <a href="#car-charger" className='hii' onClick={() => scrollToSection('car-charger')}>Car Charger</a>
          <a href="#bus-charger" className='hii' onClick={() => scrollToSection('bus-charger')}>Bus Charger</a>
          <a href="#truck-charger" className='hii' onClick={() => scrollToSection('truck-charger')}>Truck Charger</a>
        </nav>
        <section id="energy-service"  className="charger-section1" >
          <div className="intro" data-aos="fade-up">
            <div className="text-content">
              <h2 className='hii1'>Energy as a Service</h2>
            </div>
          </div>
        </section>
        <section id="car-charger" className="mission-section" >
        <div className="section-content" data-aos="fade-up">
        <h2 className='hii1'>Car Charger</h2>
        <img src="/images/CAR.png" alt="" className="mission-image" />
          
        </div>
      </section>
        <section className="company-info-section"  >
        <div className="section-content3" data-aos="fade-up" >
          
          <p className='hii1'>
          At Electrovolt, we are committed to powering the future of transportation with clean and efficient energy. 
              Our car charging facilities are designed to provide a seamless and convenient experience for electric vehicle owners.
               We understand the importance of reliable charging for your electric car. 
               Our strategically located charging stations ensure you can drive without fear, 
               with the assurance of finding a dependable charging facility nearby.
          </p>
          
        </div>
        <div className="section-content4" data-aos="fade-up">
        <div className="red-arrow-list1">
              <div className='hii1'>
              <span>&rarr;</span>Fast Charging: Experience quick and efficient charging for your electric car.<br />
              </div>
              <div className='hii1'>
              <span>&rarr;</span>Reliable Network: Our extensive charging network ensures a station is nearby when you need it.<br />
              </div>
              <div className='hii1'>
              <span>&rarr;</span>User-Friendly Interface: Our charging stations feature an intuitive interface for easy operation.<br />
              </div>
              
              <div className='hii1'>
              <span>&rarr;</span>24/7 Availability: Charge your vehicle anytime, day or night.<br />
              </div>
              <div className='hii1'>
              <span>&rarr;</span>Green Energy: We prioritize sustainability by using renewable energy sources.<br />
              </div>
              <div className='hii1'>
              <span>&rarr;</span>Safety First: Built-in safety features to ensure a secure charging process.<br />
              </div>
              <div className='hii1'>
              <span>&rarr;</span>Remote Monitoring: Monitor charging progress and troubleshoot remotely.
              </div>
          </div>
        </div>
      </section>
      <section id="bus-charger" className="mission-section" >
        <div className="section-content" data-aos="fade-up">
        <h2 className='hii1'>Bus Charger</h2>
        <img src="/images/BUS2.png" alt="" className="mission-image" />
          
        </div>
      </section>
        <section className="company-info-section"  >
        <div className="section-content3" data-aos="fade-up" >
          
          <p className='hii1'>
          Empower your electric buses with Electrovolt’s advance charging infrastructure. 
              We understand the unique needs of commercial electric vehicles,
               and our charging station are tailored to meet those requirements. 
               Our strategically placed charging stations guarantee reliable charging,
                allowing your team to operate smoothly without worrying about charging availability.
          </p>
          
        </div>
        <div className="section-content4" data-aos="fade-up">
        <div className="red-arrow-list1">
              <div className='hii1'>
              <span>&rarr;</span>High-Capacity Charging: Rapidly charge your electric buses for efficient operations.<br/>
              </div>
              <div className='hii1'>
              <span>&rarr;</span>Reliable Network: Access multiple charging hubs to optimize your bus fleet's routes.<br/>
              </div>
              <div className='hii1'>
              <span>&rarr;</span>Fleet Management: Monitor and manage multiple buses simultaneously.
              </div>
          </div>
        </div>
      </section>
      <section id="truck-charger" className="mission-section" >
        <div className="section-content" data-aos="fade-up">
        <h2 className='hii'>Truck Charger</h2>
        <img src="/images/TRUCK.png" alt="" className="mission-image" />
          
        </div>
      </section>
        <section className="company-info-section"  >
        <div className="section-content3" data-aos="fade-up" >
          
          <p className='hii1'>
          For the heavy-duty demands of electric trucks,
               ElectroVolt provides robust and reliable charging infrastructure. 
               Our truck charging stations are designed to support the power needs of electric freight vehicles. 
               Our stations are strategically placed to ensure reliable power for electric trucks. 
               Facilitating seamless commutes regardless of time and location.
          </p>
          
        </div>
      <div className="section-content4" data-aos="fade-up">
        <div className="red-arrow-list1">
              <div className='hii1'>
                <span>&rarr;</span>High-Power Charging: Fast and powerful charging for electric trucks.<br/>
              </div>
              <div className='hii1'>
                  <span>&rarr;</span>Heavy-Duty Compatibility: Built to handle the demands of large electric trucks.
              </div>
        </div>
      </div>
      </section>
      </div>
      
    </div>
  );
};

export default Solutions;












