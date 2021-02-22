import React from 'react';
import Pixel from "./Pixel";
import classNames from 'classnames';

const Row = ({row, forKey}) => {
  return (
    <div className='row'>
    {row.map((item, index) => {
      const color = classNames({ 
        'white': item,
        'black': !item
      });;
      return (
        <Pixel key={index +(forKey*11) + 12} colorProps={color}/>
      )
    })}
    </div>
  )
};

export default Row;