import React from 'react';
import './CardsComponent.css'; // Import custom styles

const CardComponent = ({ image, title, description, buttonText, onClick }) => {
  return (
    <div className="custom-card">
      <img src={image} alt={title} className="custom-card-image" />
      <div className="custom-card-body">
        <h5 className="custom-card-title">{title}</h5>
        <p className="custom-card-description">{description}</p>
        <button className="custom-card-button">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
