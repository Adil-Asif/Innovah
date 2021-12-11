import React from "react";
import "./PageLayout.style.scss";

import { Layout  } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const { Content } = Layout;

const PageLayout = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh"}}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header/>
          <Content style={{ margin: '0 16px' }}>
          
          </Content>
          <Footer/>
        </Layout>
      </Layout>
    </div>
  );
};

export default PageLayout;
