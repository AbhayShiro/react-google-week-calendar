import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Row } from "antd";
import PropTypes from "prop-types";
import SC from "styled-components";

import EventTag from "../eventTag";
import notifier from "../notifier";

import {
  dayNameFromString,
  convertTo12,
  dayOrNight
} from "../../utility/dateHelpers";

const BGSpan = SC.span`
  width: 100%;
  height: 48px;
  z-index: 1;
  display: inline-block;
`;

class HourBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTag: null
    };
    this.element = null;
  }

  openFormModal = () => {
    let domNode = ReactDOM.findDOMNode(this.element);
    let position = domNode.getBoundingClientRect();
    console.log(position);
    this.props.openForm();
  };

  generateEventTag = (event, dateKey) => {
    return event.map((e, k) => {
      let _eventData = Object.assign({}, e, {
        date: this.props.rawKey,
        day: k,
        id: e.id
      });
      return (
        <EventTag
          label={e.title}
          key={k}
          onClick={() => {
            this.setState({
              activeTag: k
            });
            let _taskAddedDay = dayNameFromString(e.from.raw),
              _data = {
                title: e.title,
                description: `${_taskAddedDay}, from ${convertTo12(
                  e.from.hours
                )} ${dayOrNight(e.to.raw)} to ${convertTo12(
                  e.to.hours
                )} ${dayOrNight(e.to.raw)}`,
                deleteEvent: () => {
                  this.props.onDelete(_eventData);
                },
                editEvent: () => {
                  this.props.onDelete(_eventData);
                  this.props.onEdit(_eventData);
                },
                onRevert: () => {
                  this.props.onAdd(_eventData);
                }
              };
            notifier(_data);
          }}
          styleObj={{
            width: Math.abs(90 / event.length) + "%",
            zIndex: this.state.activeTag == k ? 4 * 20 : 4 + k,
            left: k * 20 + "%",
            height: Math.abs(e.toOffset.top - e.fromOffset.top)
          }}
        />
      );
    });
  };

  render() {
    let { openForm, event, children, hour, raw } = this.props;
    return (
      <Row
        ref={e => (this.element = e)}
        className="hourbox-wrapper"
        style={{
          minHeight: "48px",
          border: "1px solid #cecece",
          borderBottom: "none",
          borderRight: "none"
        }}
      >
        <BGSpan onClick={this.openFormModal} />
        {event.length > 0 ? this.generateEventTag(event, raw) : ""}
      </Row>
    );
  }
}

HourBox.defaultProps = {
  id: ""
};

HourBox.propTypes = {
  id: PropTypes.string
};

export default HourBox;
