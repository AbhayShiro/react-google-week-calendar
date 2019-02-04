import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import SC from "styled-components";

const ContentHeader = SC.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    margin-bottom: 25px;
`;
const DayLabel = SC.div`
color: ${props => (props.active ? "#70757a" : "#3c4043")};
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
    color: ${props => (props.active ? "#fff" : "#3c4043")};
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
    background-color: ${props => (props.active ? "#1a73e8" : "inherit")};
    &:hover{
      background-color: ${props => (props.active ? "#1a73e8" : "#f1f3f4")};
    }
`;

const CalendarHeader = ({ day, date, active }) => (
  <ContentHeader className="sticky-head">
    <DayLabel active={false}>{day}</DayLabel>
    <DateLabel active={false}>{date}</DateLabel>
  </ContentHeader>
);

CalendarHeader.defaultProps = {
  day: "Sun",
  date: "13",
  active: false
};

CalendarHeader.propTypes = {
  day: PropTypes.string,
  date: PropTypes.string,
  active: PropTypes.bool
};

export default CalendarHeader;
