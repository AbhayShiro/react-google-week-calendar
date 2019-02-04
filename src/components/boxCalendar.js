import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Calendar } from "antd";

import { targetDateSelected } from "../store/actions/boxCalendarActions";

class BoxCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelect = value => {
    console.log(value);
    this.props.targetDateSelected(value);
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Calendar fullscreen={false} mode="month" onSelect={this.onSelect} />
      </div>
    );
  }
}

export default connect(
  null,
  { targetDateSelected }
)(BoxCalendar);
