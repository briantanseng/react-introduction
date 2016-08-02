import React, { Component } from 'react';
import './TimeComponent.css';
import moment from 'moment';

class TimeComponent extends Component {

  constructor(props) {
    super(props);
    // state is initialized
    this.state = {
      currentTime: moment().format()
    }

  }

  componentDidMount() {
    // modify the state
    this.id = setInterval(() => {
      this.setState({ currentTime: moment().format() });
    }, 1000);

  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    return (
      <div className="TimeComponent-display">
        Time: { this.state.currentTime }
      </div>
    );
  }
}

export default TimeComponent;
