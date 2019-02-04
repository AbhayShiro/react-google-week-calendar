import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Icon } from "antd";

//Custom component imports
import BoxCalendar from "../components/boxCalendar";
import LogoContainer from "../components/logo";

const { Content, Sider } = Layout;

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            background: "#fff",
            width: "280px !important"
          }}
        >
          <LogoContainer>Calendar</LogoContainer>
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
