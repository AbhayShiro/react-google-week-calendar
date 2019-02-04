import React, { Component } from "react";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import { Popover, Button } from "antd";

class HourBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { openForm, children } = this.props;
    return (
      <Row
        onClick={openForm}
        className="hourbox-wrapper"
        style={{
          minHeight: "48px",
          border: "1px solid #cecece",
          borderBottom: "none",
          borderRight: "none"
        }}>
        {children}
      </Row>
    );
  }
}

export default HourBox;
