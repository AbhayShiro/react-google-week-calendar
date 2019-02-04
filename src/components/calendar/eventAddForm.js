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
    let { isOpen, onClose, modalStyleProps } = this.props;
    return (
      <Modal
        title={null}
        style={modalStyleProps}
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
  isOpen: false,
  modalStyleProps: { top: 20 }
};

EventAddForm.propTypes = {
  isOpen: PropTypes.bool,
  modalStyleProps: PropTypes.object
};

export default EventAddForm;
