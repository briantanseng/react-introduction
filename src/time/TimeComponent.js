import React, { Component } from 'react';
import './TimeComponent.css';

class TimeComponent extends Component {
  render() {
    return (
      <div className="TimeComponent-display">{new Date().toString()}</div>
    );
  }
}

export default TimeComponent;
