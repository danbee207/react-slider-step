'use strict';

import React from 'react';
import _ from 'lodash';
import Button from './Button';

require('styles//ReactSliderStep.sass');

const lineClass={
  fill:"none",
  stroke:"#007ce7",
  strokeLinecap:"round",
  strokeMiterlimit:10,
  strokeWidth:"5px"
};

const svgStyle={

};

let ReactSliderStepComponent = ({ min, max, width }) => (
  <div className="index">
    <svg xmlns="http://www.w3.org/2000/svg" style={{width: width}} >
      <line style={lineClass} x1="2.5" y1="10" x2="100%" y2="10"/>
      {_.map(_.range(min, max + 1), i => <Button key={i} i={i} />)}
    </svg>
  </div>
);

ReactSliderStepComponent.displayName = 'ReactSliderStepComponent';

ReactSliderStepComponent.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired
}

ReactSliderStepComponent.defaultProps = {
  min: 0
};

// Uncomment properties you need
// ReactSliderStepComponent.propTypes = {};
// ReactSliderStepComponent.defaultProps = {};

export default ReactSliderStepComponent;
