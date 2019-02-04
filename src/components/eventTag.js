import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tag } from "antd";

const EventTag = ({ color, label }) => (
  <Tag
    color={color}
    style={{
      backgroundColor: "#039BE5",
      borderColor: "#039BE5",
      width: "90%"
    }}>
    {label}
  </Tag>
);

EventTag.defaultProps = {
  color: "#108ee9",
  label: null
};

EventTag.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string
};

export default EventTag;
