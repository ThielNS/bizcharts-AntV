import React, { Component } from 'react';
import { Col, Row } from "antd";
import './timer.css';

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    }
  }

  static date(value = null) {
    return new Date(value);
  }

  componentDidMount() {
    const date = Timer.date();
    const initTime = date.setHours(0,0,0);

    this.setState({
      time: initTime
    })
  }

  getTime(value) {
    const date = Timer.date(value);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const milliseconds = date.getMilliseconds();

    return `${hour}:${minute}:${milliseconds}`;
  }

  setTime() {
    const { time } = this.state;
    this.setState({
      time: time + 1000
    })
  }

  render() {
    return (
      <Row type="flex" justify="center" align="middle" className="main-time">
        <Col span={12} className="content-time">
          <span className="time">
            {this.getTime(this.state.time)}
          </span>
        </Col>
      </Row>
    )
  }
}

setInterval(Timer.setTime, 1000);

export default Timer;