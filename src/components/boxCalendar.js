import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Calendar } from "antd";

import { targetDateSelected } from "../store/actions/boxCalendarActions";
import { findWeekRange } from "../store/actions/calendarDataAction";

class BoxCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelect = value => {
    let formattedValue = value.format("YYYY-MM-DD");
    this.props.targetDateSelected(formattedValue);
    this.props.findWeekRange(formattedValue);
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
  { targetDateSelected, findWeekRange }
)(BoxCalendar);
