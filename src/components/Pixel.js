import React, { useEffect, useState } from 'react';

const Pixel = ({colorProps}) => {
  const [color, setColor] = useState(colorProps);

  useEffect (() => {
    setColor(colorProps)
  }, [colorProps]);

  const click = () => {
    const newColor = color === 'white' ? 'black' : 'white';
    setColor(newColor);
  };

  return (
    <div className={`pixel ${color}`} onClick={click}></div>
  );
};

export default Pixel;