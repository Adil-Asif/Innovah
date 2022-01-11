import React from "react";
import "./GlobalIdeasPage.style.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout, Row, Col} from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GlobalIdeas from "../../assests/Images/GlobalIdeas.svg";
import IdeasItem from "../../components/IdeasItem/IdeasItem";
const { Content } = Layout;

const GlobalIdeasPage = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout" data-theme="dark">
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <div className="titleSection">
              <div className="pageTitle">
                <PageTitle title="Global Ideas" />
              </div>
              <img src={GlobalIdeas} alt="Global Ideas" />
            </div>
            <div>
              <div className="ideaItemsDashboard">
                <div className="ideaItems">
                  <Row gutter={32}>
                    <Col className="gutter-row" span={8}>
                      <div>
                        <IdeasItem
                          ideaName="Dozti"
                          description="Dozti is an online platform where users can by groceries. Dozti allows people to first check the recived order than pay. Customers can return the order without paying if they aren't happy with thier order. For online payments we have a 100% refund policy."
                          likes="900"
                          views="2000"
                          comments="500"
                          imageUrl={
                            require("../../assests/Images/IdeasImage/ECommerce.jpg")
                              .default
                          }
                          global={true}
                        />
                      </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <div>
                        <IdeasItem
                          ideaName="Edu Lane"
                          description="Edu Lane is an online platforms where teachers can manage thier classes by adding students, co-teacher, uploading resources, and assignments. Students can download uploaded resources, check thier marks, and submit assignments"
                          likes="10"
                          views="200"
                          comments="5"
                          imageUrl={
                            require("../../assests/Images/IdeasImage/EduLane.jpg")
                              .default
                          }
                          global={true}
                        />
                      </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <div>
                        <IdeasItem
                          ideaName="Facet"
                          description="Facet is a proprietary videotelephony product which will allow users to have video calls with other users, conference calls. The app will be developed for web, android, and desktops."
                          likes="0"
                          views="50"
                          comments="3"
                          imageUrl={
                            require("../../assests/Images/IdeasImage/Facet.jpg")
                              .default
                          }
                          global={true}
                        />
                      </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <div style={{paddingTop: "40px"}}>
                        <IdeasItem
                          ideaName="Stream.io"
                          description="It is video streaming platform where content creators can upload their videos and monetize them. These videos will be available to watch all around the globe based on user watch history and preferences."
                          likes="100"
                          views="3000"
                          comments="20"
                          imageUrl={
                            require("../../assests/Images/IdeasImage/Stream.jpg")
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

export default GlobalIdeasPage;
