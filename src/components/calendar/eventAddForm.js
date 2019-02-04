import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Input, Modal } from "antd";

class EventAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { isOpen, onClose } = this.props;
    return (
      <Modal
        title={null}
        style={{ top: 20 }}
        visible={isOpen}
        onOk={onClose}
        onCancel={onClose}>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    );
  }
}

EventAddForm.defaultProps = {
  isOpen: false
};

EventAddForm.propTypes = {
  isOpen: PropTypes.bool
};

export default EventAddForm;
