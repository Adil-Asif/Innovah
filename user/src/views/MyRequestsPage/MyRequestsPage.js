import React from "react";
import "./MyRequestsPage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout, Row, Col } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MyRequest from "../../assests/Images/MyRequests.svg";
import RequestsItem from "../../components/RequestsItem/RequestsItem";

const { Content } = Layout;

const MyRequestsPage = () => {
  return (
    <div className="myRequestsPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div className="pageTitle">
                <PageTitle title="My Requests" />
              </div>
              <img src={MyRequest} alt="My Requests" />
            </div>
            <div>
              <div className="RequestItemsDashboard">
                <div className="RequestItems">
                  <Row gutter={32}>
                    <Col className="gutter-row" span={8}>
                      <div style={{ paddingTop: "40px" }}>
                        <RequestsItem
                          RequestName="Stream.io"
                          description="It is video streaming platform where content creators can upload their videos and monetize them. These videos will be available to watch all around the globe based on user watch history and preferences."
                          likes="100"
                          views="3000"
                          comments="20"
                          imageUrl={require("../../assests/Images/IdeasImage/Stream.jpg")}
                          global={false}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default MyRequestsPage;
