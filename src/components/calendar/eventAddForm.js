import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Input, Modal, Tag, TimePicker } from "antd";
import SC from "styled-components";
import uuid from "uuid/v4";

import { getBounds } from "../../utility/domHelpers";
import {
  timeFromString,
  timeObjectFromNumber
} from "../../utility/dateHelpers";

const Item = Form.Item;

const TimeControls = SC.div`
  display: flex;
`;

class EventAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  submitForm = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        let { from, to, title } = values,
          fromFormat = from.format("A"),
          toFormat = to.format("A"),
          fromHours = from.hours(),
          fromMinutes = from.minutes(),
          toHours = to.hours(),
          toMinutes = to.minutes(),
          fromOffset = getBounds(fromHours + "_hours"),
          toOffset = getBounds(toHours + "_hours");
        this.props.saveEvent({
          id: this.props.id ? this.props.id : uuid(),
          fromOffset,
          toOffset,
          title,
          from: {
            hours: fromHours,
            raw: from
          },
          to: {
            hours: toHours,
            raw: to
          },
          date: this.props.date
        });
        // this.props.refreshEventForm();
        this.props.form.resetFields();
        this.props.onClose();
      }
    });
  };

  render() {
    let {
      isOpen,
      onClose,
      modalStyleProps,
      form,
      from,
      date,
      title,
      to,
      id
    } = this.props;
    let { getFieldDecorator } = form;
    return (
      <Modal
        title={null}
        style={modalStyleProps}
        visible={isOpen}
        destroyOnClose={true}
        onOk={() => {
          this.submitForm();
        }}
        onCancel={onClose}
      >
        <Form>
          <Item>
            {getFieldDecorator("title", {
              initialValue: id ? title : "",
              rules: [{ required: true, message: "Please add a title!" }]
            })(<Input placeholder="Add title" className="event-form-input" />)}
          </Item>
          <Item>
            <Tag className="event-form-tag-item" color="blue">
              Event
            </Tag>
          </Item>
          <TimeControls>
            <Item>
              {getFieldDecorator("from", {
                initialValue: id ? from.raw : timeObjectFromNumber(from.hours)
              })(
                <TimePicker
                  minuteStep={30}
                  allowClear={true}
                  use12Hours={true}
                  format="h:mm a"
                  placeholder="From time"
                />
              )}
            </Item>
            <Item>
              {getFieldDecorator("to", {
                initialValue: id ? to.raw : timeObjectFromNumber(to.hours)
              })(
                <TimePicker
                  minuteStep={30}
                  allowClear={true}
                  use12Hours={true}
                  format="h:mm a"
                  placeholder="To time"
                />
              )}
            </Item>
          </TimeControls>
        </Form>
      </Modal>
    );
  }
}

EventAddForm.defaultProps = {
  isOpen: false,
  modalStyleProps: { top: 20 },
  from: {
    hours: null
  },
  to: {
    hours: null
  }
};

EventAddForm.propTypes = {
  isOpen: PropTypes.bool,
  modalStyleProps: PropTypes.object
};

export default Form.create()(EventAddForm);
