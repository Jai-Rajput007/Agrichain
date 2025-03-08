"use client";

import React from "react";
import Starfield from "react-starfield";

const StarfieldBackground: React.FC = () => {
  return (
    <Starfield
      starCount={1000}
      starColor={[255, 255, 255]}
      speedFactor={0.5}
      backgroundColor="black"
    
    />
  );
};

export default StarfieldBackground;