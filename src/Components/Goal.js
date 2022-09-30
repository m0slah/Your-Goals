import React from 'react';
import './Goal.css';

function Goal(props) {
  return (
    <div className='goal'>
       <p>{props.title}</p>
    </div>
  )
}

export default Goal