import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import AdminWrapper from "../components/AdminWrapper";

const { Header, Content } = Layout;

export default class DashboardMain extends Component {
  render() {
    return (
      <AdminWrapper>
        <Layout>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </AdminWrapper>
    );
  }
}
