import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column1">
        <h2 className='hii'>Get in Touch Today</h2>
        {/* <button onClick={() => window.open('tel:+91 9687558299')}>Call ElectroVolt</button> */}
        <div className="social-icons">
          <button onClick={() => window.open('https://www.linkedin.com/company/electrovolt-charging-solutions/')}><i className="fab fa-linkedin"></i></button>
          <button ><i className="fab fa-twitter"></i></button>
          <button ><i className="fab fa-facebook"></i></button>
          <button onClick={() => window.open('https://www.instagram.com/electrovolt.in?igshid=MmVlMjlkMTBhMg==')}><i className="fab fa-instagram"></i></button>
        </div>
      </div>

      <div className="column2">
        <div className="logo-container">
            <Link to="/" className="logo-link">
                <img src="/images/electrovolt.jpg" alt="Logo" className="logo" />
            </Link>
        </div>
        <div className="address">
          <p> Electrovolt Charging Solutions, <br/> 305, Third Floor, Centre Point, <br/> Opp. Bai Avabai  High <br/> School, Halar Road, <br/> Valsad- 396001,<br/>(Gujarat-India)</p>
          <p>Email: <span onClick={() => window.open('mailto:info@electrovolt.com')}>info_hub@electrovolt.in </span></p>
        </div>
        <div className="customer-support">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
