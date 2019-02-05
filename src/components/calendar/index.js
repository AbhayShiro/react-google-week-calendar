import React from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Custom imports
import EventAddForm from "./eventAddForm";
import CalendarHeader from "./header";
import HourBox from "./hourBox";
import TimeLabel from "./timeLabel";

//event form management actions
import {
  formModalClose,
  formModalOpen,
  addEventData,
  deleteEventData,
  editEventData,
  refreshEventForm
} from "../../store/actions/eventFormAction";

//Mock data import
import { weekData, timeLabel } from "./mockData";

/**
 * @description Calendar component is responsible to render calender as a whole, which includes the header and date-wise collection of events.
 */
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateEventBlocks = weekData => {
    return Object.values(weekData).map(({ day, date, data, raw }, i) => {
      return (
        <Col key={i} span={3} className="daytime-wrapper">
          <CalendarHeader day={day} date={date} />
          {this.generateHourBox(data, raw)}
        </Col>
      );
    });
  };

  generateHourBox = (data, dataKey) => {
    return Object.values(data).map((event, j) => {
      let _event = event;
      return (
        <HourBox
          key={j}
          hour={j}
          rawKey={dataKey}
          event={_event}
          id={_event.id}
          onEdit={_editData => {
            this.props.editEventData(_editData);
            this.props.formModalOpen(_editData);
            this.forceUpdate();
          }}
          onDelete={deleteData => {
            this.props.deleteEventData(deleteData);
          }}
          openForm={() => {
            this.props.formModalOpen({
              from: j,
              date: dataKey
            });
          }}
        />
      );
    });
  };

  generateTimeLabelBox = timeLabel => {
    return timeLabel.map(({ id, label, position }, o) => {
      return (
        <TimeLabel
          key={o}
          label={label}
          id={id + "_hours"}
          position={position}
        />
      );
    });
  };

  //<EventTag label="Call Tim, 5PM" />
  render() {
    let {
      weekData,
      timeLabel,
      isModalOpen,
      formModalClose,
      activeTile,
      addEventData,
      refreshEventForm
    } = this.props;
    return (
      <span>
        {weekData ? (
          <Row
            style={{
              marginTop: "34px"
            }}
          >
            <Col span={2} className="time-tick-column">
              {this.generateTimeLabelBox(timeLabel)}
            </Col>
            {this.generateEventBlocks(weekData)}
          </Row>
        ) : (
          ""
        )}
        <EventAddForm
          refreshEventFor={refreshEventForm}
          isOpen={isModalOpen}
          onClose={() => {
            formModalClose();
          }}
          saveEvent={data => {
            addEventData(data);
          }}
          {...activeTile}
        />
      </span>
    );
  }
}

Calendar.defaultProps = {
  weekData,
  timeLabel
};

Calendar.propTypes = {
  weekData: PropTypes.object,
  timeLabel: PropTypes.array,
  isModalOpen: PropTypes.bool,
  activeTile: PropTypes.object
};

export default connect(
  state => {
    return {
      isModalOpen: state.eventForm.isModalOpen,
      activeTile: state.eventForm.activeTile
    };
  },
  {
    formModalClose,
    formModalOpen,
    addEventData,
    editEventData,
    deleteEventData,
    refreshEventForm
  }
)(Calendar);
