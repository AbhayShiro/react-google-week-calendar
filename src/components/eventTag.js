import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tag } from "antd";

const EventTag = ({ color, label }) => (
  <Tag
    color={color}
    style={{
      backgroundColor: "#3F51B5",
      borderColor: "#3F51B5",
      width: "90%"
    }}
  >
    {label}
  </Tag>
);

EventTag.defaultProps = {
  color: "#108ee9",
  label: ""
};

EventTag.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string
};

export default EventTag;
