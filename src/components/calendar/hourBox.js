import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import { Popover, Button } from "antd";

class HourBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.element = null;
  }

  openFormModal = () => {
    let domNode = ReactDOM.findDOMNode(this.element);
    let position = domNode.getBoundingClientRect();
    console.log(position);
    this.props.openForm();
  };

  render() {
    let { openForm, children } = this.props;
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
        {children}
      </Row>
    );
  }
}

export default HourBox;
