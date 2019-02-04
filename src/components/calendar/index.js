import React from "react";
import { Row, Col, Layout } from "antd";
import PropTypes from "prop-types";

import CalendarHeader from "./header";
import HourBox from "./hourBox";
import EventTag from "../eventTag";
import TimeLabel from "./timeLabel";

import { weekData, timeLabel } from "./mockData";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //<EventTag label="Call Tim, 5PM" />
  render() {
    return (
      <span>
        <Row
          style={{
            marginTop: "34px"
          }}>
          <Col span={2} className="time-tick-column">
            {timeLabel.map((time, o) => {
              return <TimeLabel key={o} label={time} />;
            })}
          </Col>
          {Object.values(weekData).map(({ day, date, data }, i) => {
            return (
              <Col key={i} span={3} className="daytime-wrapper">
                <CalendarHeader day={day} date={date} />
                {Object.values(data).map((event, j) => {
                  return <HourBox />;
                })}
              </Col>
            );
          })}
        </Row>
      </span>
    );
  }
}

export default Calendar;
