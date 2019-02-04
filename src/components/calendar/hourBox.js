import React, { Component } from "react";
import { Row, Col } from "antd";
import PropTypes from "prop-types";

class HourBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { children } = this.props;
    return (
      <Row
        style={{
          minHeight: "60px",
          border: "1px solid #cecece"
        }}
      >
        {children}
      </Row>
    );
  }
}

export default HourBox;
