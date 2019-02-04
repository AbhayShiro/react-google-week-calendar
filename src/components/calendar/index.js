import React from "react";
import { Row, Col, Layout } from "antd";
import PropTypes from "prop-types";

import CalendarHeader from "./header";
import HourBox from "./hourBox";
import EventTag from "../eventTag";

import MockData from "./mockData";

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
          {Object.values(MockData).map(({ day, date, data }, i) => {
            console.log({ day, date, data }, i);
            return (
              <Col span={3}>
                <CalendarHeader day={day} date={date} />
                {Object.values(data).map((event, j) => {
                  return (
                    <HourBox>
                      <EventTag label="Call Tim, 5PM" />
                    </HourBox>
                  );
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
