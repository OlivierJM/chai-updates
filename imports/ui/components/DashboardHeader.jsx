import React from 'react'
import { Layout, Menu } from "antd";
import { Link } from 'react-router-dom'

const { Header } = Layout;


const DashboardHeader = () => (
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1"><Link to='/post'>Create Post</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/updates'>Updates</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/upload'>Upload</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/posts'>Posts</Link></Menu.Item>
          </Menu>
        </Header>
)

export default DashboardHeader