import React from 'react';


const btnClass ={
  fill : "#000",
  stroke:"#007ce7",
  strokeWidth : 3
};

export default ({i}) => (
  <circle cx={20 + 20 * i} cy="10" r="7" style={btnClass}/>
  //<path style={btnClass} d="M142.17-9.28A12.28,12.28,0,1,0,154.46,3,12.3,12.3,0,0,0,142.17-9.28Z" transform={`translate(${-100 + id * 25} 9.28)`}/>

);
