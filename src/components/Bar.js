import React from 'react';
import '../Bar.css';

const Bar = ({data}) => {
    console.log(data)
  return (
      <progress className="progress-style" value={25} max={100}>
      </progress>
  );
}

export default Bar;