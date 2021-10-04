import React from 'react';
import image from '../../assets/images/rotate-device.gif';

import './style.scss';

const RotateDevice = () => {
  return (
    <div id="rotate-device" className="text-center">
      <h2>Please rotate your device</h2>
      <img src={image} alt="Rotate your device" />
    </div>
  );
};

export default RotateDevice;