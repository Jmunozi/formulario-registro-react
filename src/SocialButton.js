import React from 'react';

const SocialButton = ({ image, onClick }) => (
  <button onClick={onClick} className="btn btn-light m-2 social-button">
    <img src={image} alt="Social Icon" className="social-icon" />
  </button>
);

export default SocialButton;
