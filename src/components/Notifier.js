import React from "react";
import { Button, notification } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const openNotification = ({ editEvent }) => {
  const key = `open${Date.now()}`;
  const btn = (
    <React.Fragment>
      <Button type="primary" size="small" onClick={() => editEvent}>
        Edit
      </Button>
      <Button
        type="primary"
        size="small"
        onClick={() => notification.close(key)}>
        Edit
      </Button>
    </React.Fragment>
  );
  notification.open({
    message: "Notification Title",
    description:
      'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
    duration: 0,
    onClose: () => {}
  });
};

export default openNotification;
