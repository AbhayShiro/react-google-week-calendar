import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Layout } from "antd";

//Custom component imports
import LogoContainer from "../components/logo";
import Sidebar from "../components/sidebar";
import Calendar from "../components/calendar";

const { Content } = Layout;

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { timeLabel, weekData } = this.props;
    return (
      <Layout className="white-bg vh-100">
        <LogoContainer>Calendar</LogoContainer>
        <Layout className="core-layout">
          <Sidebar />
          <Layout className="white-bg">
            <Content style={{ margin: "24px 16px 0" }}>
              <Calendar timeLabel={timeLabel} weekData={weekData} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default connect(state => {
  return {
    timeLabel: state.calendarData.timeLabel,
    weekData: state.calendarData.weekData
  };
})(MainLayout);
