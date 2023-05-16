import React from 'react';

const Banner = ({ imageUrl, headline, message }) => {
  return (
    <div className="banner">
      <img src={imageUrl} alt="Banner" className="banner__image" />
      <div className="banner__content">
        <h1 className="banner__headline">{headline}</h1>
        <p className="banner__message">{message}</p>
      </div>
    </div>
  );
};

export default Banner;
