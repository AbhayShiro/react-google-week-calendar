import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import { Popover, Button } from "antd";

import EventTag from "../eventTag";

class HourBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.element = null;
  }

  generateEventTag = event => {
    return event.map((e, k) => {
      return (
        <EventTag
          label={e.title}
          key={k}
          styleObj={{
            width: Math.abs(90 / event.length) + "%",
            zIndex: 4 + k,
            left: k * 20 + "%",
            height: Math.abs(e.toOffset.top - e.fromOffset.top)
          }}
        />
      );
    });
  };

  openFormModal = () => {
    let domNode = ReactDOM.findDOMNode(this.element);
    let position = domNode.getBoundingClientRect();
    console.log(position);
    this.props.openForm();
  };

  render() {
    let { openForm, event, children, hour, raw } = this.props;
    return (
      <Row
        ref={e => (this.element = e)}
        onClick={this.openFormModal}
        className="hourbox-wrapper"
        style={{
          minHeight: "48px",
          border: "1px solid #cecece",
          borderBottom: "none",
          borderRight: "none"
        }}>
        {event.length > 0 ? this.generateEventTag(event) : ""}
      </Row>
    );
  }
}

export default HourBox;
