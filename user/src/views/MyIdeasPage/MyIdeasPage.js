import React, { useEffect } from "react";
import "./MyIdeasPage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout, Row, Col } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MyIdea from "../../assests/Images/MyIdeas.svg";
import IdeasItem from "../../components/IdeasItem/IdeasItem";

const { Content } = Layout;

const MyIdeasPage = () => {
  useEffect(() => {
    //TODO: Need to get response of API here
  }, []);
  return (
    <div className="myIdeasPage">
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div className="pageTitle">
                <PageTitle title="My Ideas" />
              </div>
              <img src={MyIdea} alt="My Ideas" />
            </div>
            <div>
              <div className="ideaItemsDashboard">
                <div className="ideaItems">
                  <Row gutter={32}>
                    <Col className="gutter-row" span={8}>
                      <div style={{ paddingTop: "40px" }}>
                        <IdeasItem
                          ideaName="Stream.io"
                          description="It is video streaming platform where content creators can upload their videos and monetize them. These videos will be available to watch all around the globe based on user watch history and preferences."
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

export default MyIdeasPage;
