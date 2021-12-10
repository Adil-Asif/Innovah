import React from "react";
import "./PageLayout.style.scss";

import { Layout, Breadcrumb  } from "antd";
import Sidebar from "../Sidebar/Sidebar";
const { Header, Content, Footer } = Layout;

const PageLayout = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh"}}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default PageLayout;
