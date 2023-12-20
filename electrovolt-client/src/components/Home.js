// Home.js
// Home.js
import React,{useEffect} from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
      offset: 100,
      once: false, // Only animate once
    });
  }, []);
  return (
    <div>
    
    <div className="home">
      <div className="background" style={{ backgroundImage: `url("/images/homepage.png")` }} ></div>
      <div className="overlay-text2" data-aos="fade-up">
        <span className="strike-through" >Largest</span> Accurately Located <br/> India's <span className="strike-through">Fastest Growing</span> EV Charging Network 
      </div>
      // <div className="overlay-text" data-aos="zoom-in">
          
      //     // <ol>
      //     // <h3>Steps to Charge: </h3>
      //     //   <li> the charger via App.</li>
      //     //   <li>Just plug it in*</li>
      //     // </ol>
          
      //   <p className='overlay-text1' data-aos="flip-up">*You may require manual authentication if your <br/>vehicle doesn't support Plug & Charge feature</p>
       
          
      //   </div>
        
    </div>
  
    </div>
    
  );
};

export default Home;
