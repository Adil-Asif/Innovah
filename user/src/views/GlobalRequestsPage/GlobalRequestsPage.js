import React from "react";
import "./GlobalRequestsPage.style.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout, Row, Col } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GlobalRequests from "../../assests/Images/PostRequest.svg";
import IdeasItem from "../../components/IdeasItem/IdeasItem";
const { Content } = Layout;

const GlobalRequestsPage = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div className="pageTitle">
                <PageTitle title="Global Requests" />
              </div>
              <img src={GlobalRequests} alt="Global Requests" />
            </div>
            <div>
              <div className="ideaItemsDashboard">
                <div className="ideaItems">
                  <Row gutter={32}>
                    <Col className="gutter-row" span={8}>
                      <div>
                        <IdeasItem
                          ideaName="Hiring a UI/UX designer"
                          description="We need a UI/UX designer for our application"
                          likes="9"
                          views="2000"
                          comments="5"
                          isapplicants={true}
                          applicants="2"
                          imageUrl={
                            require("../../assests/Images/IdeasImage/uiux.jpg")
                              .default
                          }
                          global={true}
                        />
                      </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <div>
                        <IdeasItem
                          ideaName="Mentorship Required"
                          description="We are a group of 5 people working on an idea related to health care industry. We need a mentor who can help us out with improvising our idea and helping us with our project"
                          likes="2"
                          views="10"
                          comments="0"
                          isapplicants={true}
                          applicants="0"
                          imageUrl={
                            require("../../assests/Images/IdeasImage/mentor.png")
                              .default
                          }
                          global={true}
                        />
                      </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <div>
                        <IdeasItem
                          ideaName="Unable to combine components in ReactJs"
                          description="We are facing issues when we are trying to combine the components into a single view"
                          likes="0"
                          views="50"
                          comments="3"
                          imageUrl={
                            require("../../assests/Images/IdeasImage/react.jpg")
                              .default
                          }
                          global={true}
                        />
                      </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <div style={{ paddingTop: "40px" }}>
                        <IdeasItem
                          ideaName="Help Required"
                          description="We need a software developer on urgent basis for our idea"
                          likes="40"
                          views="500"
                          comments="20"
                          isapplicants={true}
                          applicants="10"
                          imageUrl={
                            require("../../assests/Images/IdeasImage/help.jpg")
                              .default
                          }
                          global={true}
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

export default GlobalRequestsPage;
