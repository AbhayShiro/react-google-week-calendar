import React, { Component } from "react";
import PropTypes from "prop-types";
import { Calendar } from "antd";

class BoxCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Calendar fullscreen={false} mode="month" />
      </div>
    );
  }
}

export default BoxCalendar;
