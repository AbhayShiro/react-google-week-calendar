import React from "react";
import { Button, notification, Icon } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SC from "styled-components";

const ButtonContainer = SC.div`
  display: flex;
  color: #fff;
`;

const openNotification = ({ title, description, editEvent, deleteEvent }) => {
  const key = `open${Date.now()}`;
  const btn = (
    <ButtonContainer>
      <Button
        className="event-notif-control-button"
        icon="edit"
        size="small"
        onClick={() => {
          editEvent();
          notification.close(key);
        }}
      />
      <Button
        className="event-notif-control-button"
        size="small"
        icon="delete"
        onClick={deleteEvent}
      />
      <Button
        className="event-notif-control-button"
        size="small"
        icon="close"
        onClick={() => notification.close(key)}
      />
    </ButtonContainer>
  );
  notification.open({
    message: title,
    description: description,
    btn,
    key,
    duration: 10,
    onClose: () => {
      console.debug("Closed");
    }
  });
};

export default openNotification;
