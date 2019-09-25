import React from 'react';
import '../Bar.css';

const Bar = ({viewers, max}) => {
  return (
      <progress className="progress-style" value={viewers} max={max}>
      </progress>
  );
}

export default Bar;