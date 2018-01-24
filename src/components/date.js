
import React, { Component, PropTypes } from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
      const {date} = this.state;

    return (
        <div className="header">
            <h2 className="time">{date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</h2>
            <h2 className="date">{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</h2>
        </div>
    );
  }
}


export default Clock;