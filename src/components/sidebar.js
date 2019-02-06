import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Layout } from "antd";

import BoxCalendar from "./boxCalendar";
import CreateButton from "./createButton";
import { getTodaysDate, has } from "../utility/domHelpers";
//event form management actions
import { formModalOpen } from "../store/actions/eventFormAction";

const today = getTodaysDate();

const { Sider } = Layout;

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Sider
        collapsible={false}
        breakpoint="lg"
        collapsedWidth="0"
        className="calendar-sider"
        style={{
          background: "#fff",
          width: "270px"
        }}
      >
        <BoxCalendar />
      </Sider>
    );
  }
}

Sidebar.defaultProps = {};

Sidebar.propTypes = {};

export default connect(
  null,
  { formModalOpen }
)(Sidebar);
