import React from "react";
import PropTypes from "prop-types";
import { Tag } from "antd";

const EventTag = ({ color, label, styleObj, onClick }) => (
  <Tag
    color={color}
    onClick={onClick}
    style={Object.assign(
      {},
      {
        backgroundColor: "#039BE5",
        borderColor: "#fff",
        position: "absolute"
      },
      styleObj
    )}
  >
    {label}
  </Tag>
);

EventTag.defaultProps = {
  color: "#108ee9",
  label: null,
  styleObj: {}
};

EventTag.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  styleObj: PropTypes.any
};

export default EventTag;
