import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Layout, Menu, Icon } from "antd";

//Custom component imports
import BoxCalendar from "../components/boxCalendar";
import LogoContainer from "../components/logo";
import CreateButton from "../components/createButton";
import Calendar from "../components/calendar";

const { Content, Sider } = Layout;

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { timeLabel, weekData } = this.props;
    return (
      <Layout className="core-layout">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          className="calendar-sider"
          style={{
            background: "#fff",
            width: "270px"
          }}>
          <LogoContainer>Calendar</LogoContainer>
          <CreateButton
            onClick={() => {
              console.debug("on click calendar ebvetn added");
            }}
          />
          <BoxCalendar />
        </Sider>
        <Layout
          style={{
            background: "white"
          }}>
          <Content style={{ margin: "24px 16px 0" }}>
            <Calendar timeLabel={timeLabel} weekData={weekData} />
          </Content>
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
