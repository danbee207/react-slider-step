import React from 'react';
let actions = require('actions/actions');

export default ({i,btnKinds}) => {

  var btnClass ={
    fill : "#fff",
    stroke:"#007ce7",
    strokeWidth : "1%"
  };

  switch(btnKinds){
    case 0 : btnClass["stroke"]="#60c";                 //fill selected
    case 1 : btnClass["fill"]  ="#007ce7";break;        //fill
    case 2 : btnClass["stroke"]="#60c";                 //blank slected
    case 3 : btnClass["fill"]  ="#fff";break;           //blank
  }
  let position = 4+5*i;
  position = position + "%";

  return  <circle cx={position} cy='11' r="2%" id={"Btn"+i} style={btnClass} onClick={()=>{actions.currentBtn(props.key);}}/>
  //<path style={btnClass} d="M142.17-9.28A12.28,12.28,0,1,0,154.46,3,12.3,12.3,0,0,0,142.17-9.28Z" transform={`translate(${-100 + id * 25} 9.28)`}/>

};
