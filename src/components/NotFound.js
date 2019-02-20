import React from 'react';
import robot from '../404robot.jpg';

const NotFound = () => {
  return (
    <div className="photo-container">
      <img alt="404 Robot" src={robot}></img>
    </div>
  );
}

export default NotFound;