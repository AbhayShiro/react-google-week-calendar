import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import { Popover, Button } from "antd";
import SC from "styled-components";

import EventTag from "../eventTag";

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

  generateEventTag = event => {
    return event.map((e, k) => {
      return (
        <EventTag
          label={e.title}
          key={k}
          onClick={() => {
            this.setState({
              activeTag: k
            });
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
        }}>
        <BGSpan onClick={this.openFormModal} />
        {event.length > 0 ? this.generateEventTag(event) : ""}
      </Row>
    );
  }
}

export default HourBox;
