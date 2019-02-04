import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import SC from "styled-components";

const ContentHeader = SC.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
`;
const DayLabel = SC.div`
  color: #70757a;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: .8px;
  margin-left: 0;
  text-indent: .8px;
  text-transform: uppercase;
  text-align: center;
`;

const DateLabel = SC.div`
    font-size: 26px;
    letter-spacing: -2.6px;
    text-indent: -2.6px;
    font-variant: tabular-nums;
    font-feature-settings: "tnum" 1;
    border-radius: 100%;
    color: #3c4043;
    font-family: 'Google Sans',Roboto,Arial,sans-serif;
    line-height: 46px;
    height: 46px;
    margin-left: auto;
    margin-right: auto;
    width: 46px;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    
    cursor: pointer;
    position: relative;
    outline: none;

    line-height: 46px;
    height: 46px;
    width: 46px;

    &:hover{
      background-color: #f1f3f4;
    }
`;

const CalendarHeader = ({ day, date }) => (
  <ContentHeader>
    <DayLabel>{day}</DayLabel>
    <DateLabel>{date}</DateLabel>
  </ContentHeader>
);

CalendarHeader.defaultProps = {
  day: "Sun",
  date: "13"
};

CalendarHeader.propTypes = {
  day: PropTypes.string,
  date: PropTypes.string
};

export default CalendarHeader;
