import React from "react";
import { Row, Col, Layout } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import EventAddForm from "./eventAddForm";
import CalendarHeader from "./header";
import HourBox from "./hourBox";
import EventTag from "../eventTag";
import TimeLabel from "./timeLabel";

import {
  formModalClose,
  formModalOpen
} from "../../store/actions/eventFormAction";

import { weekData, timeLabel } from "./mockData";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //<EventTag label="Call Tim, 5PM" />
  render() {
    let {
      weekData,
      timeLabel,
      isModalOpen,
      formModalClose,
      formModalOpen
    } = this.props;
    return (
      <span>
        {weekData ? (
          <Row
            style={{
              marginTop: "34px"
            }}>
            <Col span={2} className="time-tick-column">
              {timeLabel.map(({ id, label, position }, o) => {
                return (
                  <TimeLabel
                    key={o}
                    label={label}
                    id={id}
                    position={position}
                  />
                );
              })}
            </Col>
            {Object.values(weekData).map(({ day, date, data }, i) => {
              return (
                <Col key={i} span={3} className="daytime-wrapper">
                  <CalendarHeader day={day} date={date} />
                  {Object.values(data).map((event, j) => {
                    return (
                      <HourBox
                        key={j}
                        openForm={e => {
                          e.preventDefault();
                          formModalOpen();
                        }}
                      />
                    );
                  })}
                </Col>
              );
            })}
          </Row>
        ) : (
          ""
        )}
        <EventAddForm
          isOpen={isModalOpen}
          onClose={e => {
            e.preventDefault();
            formModalClose();
          }}
        />
      </span>
    );
  }
}

Calendar.defaultProps = {
  weekData,
  timeLabel
};

export default connect(
  state => {
    return {
      isModalOpen: state.eventForm.isModalOpen
    };
  },
  { formModalClose, formModalOpen }
)(Calendar);
