import React from "react";
import PropTypes from "prop-types";
import SC from "styled-components";

const TickLabelBox = SC.div`
    padding-right: 8px;
    text-align: right;
    position: relative;
    height: 48px;
`;
const Label = SC.div`
    display: block;
    position: relative;
    top: -6px;
    color: #70757a;
    font-smoothing: subpixel-antialiased;
    font-size: 10px;
`;

const TimeLabel = ({ label }) => (
  <TickLabelBox>
    <Label>{label}</Label>
  </TickLabelBox>
);

TimeLabel.defaultProps = {
  label: ""
};

TimeLabel.propTypes = {
  label: PropTypes.string
};

export default TimeLabel;
