import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function Footers() {
  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '30px',
    fontSize: '16px',
    color: '#e0e0e0'
  };

  const iconStyle = {
    marginRight: '8px',
    color: '#4dabf7' // A light blue shade that contrasts nicely
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#1e1e2f',
    borderTop: '1px solid #444'
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <FaPhoneVolume style={iconStyle} />
        <div>
          <strong>Contact Us</strong><br />
          <span>000 333 999</span>
        </div>
      </div>

      <div style={sectionStyle}>
        <FaMailBulk style={iconStyle} />
        <div>
          <strong>Mail Us</strong><br />
          <span>worldAt@gmail.com</span>
        </div>
      </div>

      <div style={sectionStyle}>
        <IoLocationSharp style={iconStyle} />
        <div>
          <strong>Reach-out Us</strong><br />
          <span>Pakistan, Islamabad</span>
        </div>
      </div>
    </div>
  );
}

export default Footers;
