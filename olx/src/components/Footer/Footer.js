import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div className="footerParentDiv">
    <div className="content">
      <div>
        <div className="heading">
          <p>POPULAR LOCATIONS</p>
        </div>
        <div className="list">
          <ul>
            <li>kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>
      </div>
      <div>
        <div className='heading'>
          <p>TRENDING LOCATION</p>
        </div>
        <div className='list'>
          <ul>
            <li>Bhubaneshwar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="heading">
          <p>ABOUT US</p>
        </div>
        <div className="list">
          <ul>
            <li>About OLX Group</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>OLXPeople</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="heading">
          <p>OLX</p>
        </div>
        <div className="list">
          <ul>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal & Privacy information</li>
            <li>Vulnerability Disclosure Programme</li>
          </ul>
        </div>
      </div>
      <div>
        <div className='follow'>
          <p >FOLLOW US</p>
          <div className='icons'>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} /> 
        </div>
        </div>
        <div className="dwnld">
          <img src="	https://statics.olx.in/external/base/img/playstore.webp" alt="img" />
          <img src="	https://statics.olx.in/external/base/img/appstore.webp" alt="img" />
        </div>
      </div>
    </div>
    <div className="footer">
      <p>Help-Sitemap</p>
      <p>All rights reserved © 2006-2023 OLX</p>
    </div>
  </div>
  )
}

export default Footer
