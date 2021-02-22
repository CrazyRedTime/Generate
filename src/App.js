import './App.css';
import React, { useState } from 'react';
import Row from './components/Row';
import getRandomArray from './functions/getRandomArray';

const App = () => {
  const [count, setCount] = useState(1);
  const randomArray = getRandomArray();

  const generate = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <>
    <button onClick={generate}>Get new picture</button>
    <div className='avatar'>
    {randomArray.map((item, index) => <Row key={index} row={item} forKey={index}/>)}
    </div>
    <h2>Total pictures generated: {count}</h2>
    </>
  )
};

export default App;
