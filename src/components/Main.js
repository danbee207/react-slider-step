require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactSliderStepComponent from './ReactSliderStepComponent';

const lineClass={
  fill:"none",
  stroke:"#007ce7",
  strokeLinecap:"round",
  strokeMiterlimit:10,
  strokeWidth:"5px"
}
class AppComponent extends React.Component {
  render() {
    const { min, max, width } = this.props;
    return (
      <ReactSliderStepComponent max={20} width={500} />
    );
  }
}

export default AppComponent;
