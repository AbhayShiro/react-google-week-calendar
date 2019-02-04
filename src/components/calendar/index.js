import React from "react";
import { Row, Col, Layout } from "antd";
import PropTypes from "prop-types";

import CalendarHeader from "./header";
import HourBox from "./hourBox";
import EventTag from "../eventTag";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span>
        <Row
          style={{
            marginTop: "34px"
          }}
        >
          <Col span={3}>
            <CalendarHeader />
            <HourBox>
              <EventTag label="Call Tim, 5PM" />
            </HourBox>
          </Col>
          <Col span={3}>
            <CalendarHeader />
          </Col>
          <Col span={3}>
            <CalendarHeader />
          </Col>
          <Col span={3}>
            <CalendarHeader />
          </Col>
          <Col span={3}>
            <CalendarHeader />
          </Col>
          <Col span={3}>
            <CalendarHeader />
          </Col>
          <Col span={3}>
            <CalendarHeader />
          </Col>
        </Row>
      </span>
    );
  }
}

export default Calendar;
