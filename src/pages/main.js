import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Icon } from "antd";

//Custom component imports
import BoxCalendar from "../components/boxCalendar";
import LogoContainer from "../components/logo";
import CreateButton from "../components/createButton";

const { Content, Sider } = Layout;

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout className="core-layout">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          className="calendar-sider"
          style={{
            background: "#fff",
            width: "270px"
          }}
        >
          <LogoContainer>Calendar</LogoContainer>
          <CreateButton
            onClick={() => {
              console.debug("on click calendar ebvetn added");
            }}
          />
          <BoxCalendar />
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              content
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
